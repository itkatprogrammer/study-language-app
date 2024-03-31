import React, { useState } from "react";
import Card from './../../../components/General/Card/Card'
import style from "./Slider.module.scss";

export default function Slider({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(Math.max(currentIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(currentIndex + 1, data.length - 1));
  };

  // const [isDisabled, setIsDisabled] = useState(false);

  // const handleWordsFinished = () => {
  //   setIsDisabled(currentIndex === 0 || currentIndex === data.length - 1);
  // };

  const isFirstCard = currentIndex === 0;
  const isLastCard = currentIndex === data.length - 1;

  return (
    <div className={style.sliderBox}>
      <div className={style.slider}>
        <div>
          <button
            className={style.buttonRadius}
            onClick={handlePrev}
            disabled={isFirstCard}
          >
            ←
          </button>
        </div>

        {data.map((card, index) => (
          <div
            key={index}
            style={{ display: index === currentIndex ? "block" : "none" }}
          >
            <Card
              word={card.word}
              transcription={card.transcription}
              translation={card.translation}
            />
          </div>
        ))}

        <div>
          <button
            className={style.buttonRadius}
            onClick={handleNext}
            disabled={isLastCard}
          >
            →
          </button>
        </div>
      </div>

      <div>
        {currentIndex + 1}/{data.length}
      </div>
    </div>
  );
}
