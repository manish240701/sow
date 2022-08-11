import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <section className="section">
        <div className="box-main">
          <div className="firstHalf">
            <center>
              <h1 style={{ color: "#cceeff", fontSize: " 50px" }}>
                MACHINERY SPARE PARTS
              </h1>
            </center>
            <br />
            <br />
            <p style={{ color: "white", fontSize: "15px" }}>
              We understand that a breakdown in a machine can lead to various
              issues in a manufacturing plant which is why we have spares for a
              lot of machines that are ready to ship.
            </p>
            <br />
            We can offer you a wide range of of replacement spares from shafts,
            gears, bevel gears, pulleys, bearings, bearing bushes, shift forks,
            clutches (electromagnetic and mechanical), clutch levers, clutch
            plates, telescopic brushes, motors, flanges, oil seals etc.
            <br />
            Replacement spares for HMT, BFW, Kirloskar brand machines are
            available off the shelf. Spares for other machines can be supplied
            based on customers' drawings or samples.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
