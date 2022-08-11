import React, { useEffect, useState } from "react";
import "./Products.css";
import pimg from "../image/i11.jpg";
import {
  doc,
  serverTimestamp,
  setDoc,
  getDoc,
  onSnapshot,
  collection,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { ref, uploadBytes } from "firebase/storage";

const Products = () => {
  const [data, setData] = useState({});
  const [t,setT]=useState({});
  useEffect(() => {
    const fetchData = async () => {
      const unsub = onSnapshot(collection(db, "products"), (snapShot) => {
        let list = [];

        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        // console.log(typeof list);
        setT(list);
        // console.log("dsf", t)
        return;
      });
      return () => {
        unsub();
      };
    };
    fetchData();
  }, []);

  //addhandler
  const AddHandler = async (event) => {
    event.preventDefault();
    try {
      const id = "id" + new Date().getTime();
      await setDoc(doc(db, "products", id), {
        ...data,
        timeStamp: serverTimestamp(),
      });

      setData({});
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  //addinputhandler
  const InputHandler = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    setData({ ...data, [id]: value });
  };
  return (
    <div className="products-container">
      <div className="p-container">
        <center>
          <h2>PRODUCTS</h2>
        </center>

        <form onSubmit={AddHandler}>
          <input
            type="text"
            placeholder="Product Name"
            name="pname"
            id="pname"
            onChange={InputHandler}
          />
          <input
            type="text"
            id="price"
            placeholder="Price"
            name="price"
            onChange={InputHandler}
          />
          <input type="submit" />
        </form>
        <div className="products">
          <div className="row ">
            {t
              .slice(0)
              .reverse()
              .map((d) => (
                <div
                  className="column"
                  key={d.timeStamp}
                >
                  <img src={pimg} alt="prod1" />
                  <br />
                  {d["pname"]}
                  <br />
                  {d["price"]}
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="select"></div>
    </div>
  );
};

export default Products;
