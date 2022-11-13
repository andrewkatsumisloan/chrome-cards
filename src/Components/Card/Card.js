import React, { useState, useEffect } from "react";
import "./Card.scss";

const Card = (props) => {
  return (
    <div>
      {props.isFlipped ? (
        <div
          className="card"
          onClick={() => props.setIsFlipped(!props.isFlipped)}
        >
          <div className="card-back">
            <h3>{props.back}</h3>
          </div>
        </div>
      ) : (
        <div
          className="card"
          onClick={() => props.setIsFlipped(!props.isFlipped)}
        >
          <div className="card-front">
            <h3>{props.front}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
