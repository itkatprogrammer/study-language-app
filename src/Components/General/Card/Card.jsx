import React, { useState, useEffect, useRef } from 'react';
import style from './Card.module.scss';

export default function Card({
  id,
  word,
  transcription,
  translation,
  handleCheck,
  isActive,
}) {
  const [isClicked, setIsClicked] = useState(false);

  const buttonRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      buttonRef.current.focus();
    }
  }, [isActive]);

  const handleClick = () => {
    setIsClicked(!isClicked);
    handleCheck(id);
  };

  return (
    <div className={style.card}>
      <h3>{word}</h3>
      <p>{transcription}</p>

      <div>
        {isClicked ? (
          <p className={style.translation} onClick={handleClick}>
            {translation}
          </p>
        ) : (
          <button
            ref={buttonRef}
            onClick={handleClick}
            className={style.checkBtn}
          >
            Проверить
          </button>
        )}
      </div>
    </div>
  );
}
