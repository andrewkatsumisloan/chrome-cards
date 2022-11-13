import React from "react";
import "./Control.scss";

const Control = (props) => {
  //Generate random number between 0 and sLen
  const randomCard = () => {
    let rand = Math.floor(Math.random() * props.sLen);
    props.setCurrentCard(rand);
  };

  return (
    <div className="control-panel">
      {/* Control panel with next button */}
      <button className="control-next" onClick={randomCard}>
        Next
      </button>
    </div>
  );
};

export default Control;
