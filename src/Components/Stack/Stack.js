import React from "react";
import Card from "../Card/Card";
import Control from "../Control/Control";

import "./Stack.scss";

const dummyStackData = [
  {
    id: 1,
    front: "United States of America",
    back: "Washington, D.C.",
  },
  {
    id: 2,
    front: "Canada",
    back: "Ottawa",
  },
  {
    id: 3,
    front: "Japan",
    back: "Tokyo",
  },
];

const Stack = () => {
  return (
    <div className="stack-container">
      <h2> Stack Example with Dummy Data </h2>
      {/* Render random card from dummyStackData */}
      <div className="card-container">
        <Card front={dummyStackData[0].front} back={dummyStackData[0].back} />
      </div>

      {/* {dummyStackData.map((card) => {
        return (
          <div key={card.id}>
            <Card front={card.front} back={card.back} />
          </div>
        );
      })} */}
      <Control />
    </div>
  );
};

export default Stack;
