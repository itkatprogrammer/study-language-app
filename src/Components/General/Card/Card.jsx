import React, { useState, useEffect, useRef } from "react";
import st from "./Card.module.scss";

export default function Card({ word, transcription, translation, handleChecked }) {
  const [isClicked, setIsClicked] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [word]);

  const handleClick = () => {
    setIsClicked(!isClicked);
    handleChecked()
  };

  return (
    <div className={st.card}>
      <h3>{word}</h3>
      <p>{transcription}</p>

      <div>
        {isClicked ? (
          <p className={st.translation} onClick={handleClick}>
            {translation}
          </p>
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
