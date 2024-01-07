import React from "react";
import Watch1 from "../assets/w1.jpg";
import Watch2 from "../assets/w2.jpg";
import Watch3 from "../assets/w3.jpg";

const Card = () => {
  return (
    <>
      <div className="card">
        <div className="container">
          <img className="card-img" src={Watch1} alt="/" />
        </div>
        <div>
          <p className="text-1">Apple SmartWatch</p>
          <p className="text-2">Price: $650</p>
          <p className="text-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            libero similique et consequuntur velit laudantium, a dolorem
            reprehenderit? Quas, odit.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="container">
          <img className="card-img" src={Watch2} alt="/" />
        </div>
        <div>
          <p className="text-1">Apple SmartWatch</p>
          <p className="text-2">Price: $475</p>
          <p className="text-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            libero similique et consequuntur velit laudantium, a dolorem
            reprehenderit? Quas, odit.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="container">
          <img className="card-img" src={Watch3} alt="/" />
        </div>
        <div>
          <p className="text-1">Apple SmartWatch</p>
          <p className="text-2">Price: $298</p>
          <p className="text-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            libero similique et consequuntur velit laudantium, a dolorem
            reprehenderit? Quas, odit.
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
