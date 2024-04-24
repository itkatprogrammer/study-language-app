import React, { useState, useEffect } from 'react';
import Card from './../../../components/General/Card/Card';
import style from './Slider.module.scss';

export default function Slider({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFirstCard, setIsFirstCard] = useState(true);
  const [isLastCard, setIsLastCard] = useState(false);

  useEffect(() => {
    setIsFirstCard(currentIndex === 0);
    setIsLastCard(currentIndex === data.length - 1);
  }, [currentIndex, data]);

  const handlePrev = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const isActive = (cardId) => {
    return currentIndex === cardId - 1;
  };

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
            style={{ display: index === currentIndex ? 'block' : 'none' }}
          >
            <Card
              id={card.id}
              word={card.word}
              transcription={card.transcription}
              translation={card.translation}
              isActive={isActive(card.id)}
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
