import React, { useState } from "react";
import st from "./Card.module.scss";

export default function Card({ word, transcription, translation }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={st.card}>
      <h3>{word}</h3>
      <p>{transcription}</p>

      <div>
        {isClicked ? (
          <p>{translation}</p>
        ) : (
          <button onClick={handleClick} className={st.checkBtn}>
            Проверить
          </button>
        )}
      </div>
    </div>
  );
}

{
  /* <button
        className={isClicked ? st.checkBtn : st.translation}
        onClick={handleClick}
      >
        {isClicked ? <p>{translation}</p> : <p>Проверить</p>}
      </button> */
}
