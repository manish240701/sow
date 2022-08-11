import React from "react";
import "./Profile.css";
import img from "../image/i5.jpg";
const Profile = () => {
  return (
    <div className="profile-container">
      <div className="pr-container">
        <h1 style={{ textAlign: "center", display:"block" }}>User Profile Card</h1>
        <div className="card">
          <img src={img} alt="John" style={{ width: "100%" }} />
          <h1>P.KUMARAVEL M.E</h1>
          <p className="title">CEO & Founder, HI-LINE TOOLING SYSTEMS</p>
          <p>COIMBATORE</p>
          <div style={{ margin: "24px 0" }}>
            <a href="#">
              <i className="fa fa-dribbble"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
          </div>
          <p>
            <button>Contact</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
