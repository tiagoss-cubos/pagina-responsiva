import React from "react";
import "./style.css";

const Card = ({ title, cover }) => {
  return (
    <div
      className="container-card"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <div className="container-title">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Card;
