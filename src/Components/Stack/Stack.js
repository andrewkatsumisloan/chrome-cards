import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Control from "../Control/Control";
import { dummyStackData } from "../../Data/StackData";

import "./Stack.scss";

const Stack = () => {
  const sLen = dummyStackData.length;
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    console.log("useeffect triggered");
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentCard, isFlipped]);

  // Reset isFlipped when currentCard changes
  useEffect(() => {
    setIsFlipped(false);
  }, [currentCard]);

  const handleKeyPress = (e) => {
    // switch for keypresses
    switch (e.key) {
      case "n":
        let rand = Math.floor(Math.random() * sLen);
        setCurrentCard(rand);
        break;
      case "m":
        setIsFlipped(!isFlipped);
        break;
      default:
        break;
    }
  };

  return (
    <div className="stack-container">
      <h2> Countries & Capitals </h2>
      <div className="card-container">
        <Card
          front={dummyStackData[currentCard].front}
          back={dummyStackData[currentCard].back}
          isFlipped={isFlipped}
          setIsFlipped={setIsFlipped}
        />
      </div>
      <Control setCurrentCard={setCurrentCard} sLen={sLen} />
    </div>
  );
};

export default Stack;
