import React from "react";
import Watch from "../assets/w1.jpg";

const Card = () => {
  return (
    <div className="card">
      <div className="container">
        <img
          className="card-img"
          src={Watch}
          alt="/"
        />
      </div>
      <div>
        <p className="text-1">Apple Headphones</p>
        <p className="text-2">Price: $298</p>
        <p className="text-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          libero similique et consequuntur velit laudantium, a dolorem
          reprehenderit? Quas, odit.
        </p>
      </div>
    </div>
  );
};

export default Card;
