import React, { useEffect, useState } from "react";
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
  const sLen = dummyStackData.length;
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(false);
  }, [currentCard]);

  return (
    <div className="stack-container">
      <h2> Stack Example with Dummy Data </h2>
      <div className="card-container">
        <Card
          front={dummyStackData[currentCard].front}
          back={dummyStackData[currentCard].back}
          isFlipped={isFlipped}
          setIsFlipped={setIsFlipped}
        />
      </div>

      {/* {dummyStackData.map((card) => {
        return (
          <div key={card.id}>
            <Card front={card.front} back={card.back} />
          </div>
        );
      })} */}
      <Control setCurrentCard={setCurrentCard} sLen={sLen} />
    </div>
  );
};

export default Stack;
