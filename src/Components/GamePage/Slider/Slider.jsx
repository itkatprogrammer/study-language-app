import React, { useState } from "react";
import Card from "../../General/Card/Card";
import style from "./Slider.module.scss";

export default function Slider({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const [isDisabled, setIsDisabled] = useState(false);

  const handleWordsFinished = () => {
    setIsDisabled(currentIndex === 0 || currentIndex === data.length - 1);
  };

  return (
    <div className={style.sliderBox}>
      <div className={style.slider}>
        <div>
          <button
            className={style.buttonRadius}
            onClick={handlePrev}
            disabled={isDisabled}
          >
            ←
          </button>
        </div>

        {data.length > 0 && (
          <Card
            word={data[currentIndex].word}
            transcription={data[currentIndex].transcription}
            translation={data[currentIndex].translation}
          />
        )}
        <div>
          <button
            className={style.buttonRadius}
            onClick={handleNext}
            disabled={isDisabled}
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
