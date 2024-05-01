import React, { useState, useEffect } from 'react';
import Card from '../General/Card/Card';
import style from './Slider.module.scss';
import gunNext from '../../img/gun-next.png';
import gunPrev from '../../img/gun-prev.png';

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
    <div className={style.sliderBoxBg}>
      <div className={style.slider}>
        <div>
          <img
            src={gunPrev}
            alt='prev'
            onClick={handlePrev}
            style={{
              cursor: !isFirstCard ? 'pointer' : 'default',
              pointerEvents: isFirstCard ? 'none' : 'auto',
            }}
          />
        </div>

        {data.map((card, index) => (
          <div
            key={index}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
          >
            <Card
              id={card.id}
              word={card.english}
              transcription={card.transcription}
              translation={card.russian}
              isActive={isActive(card.id)}
              isSlider={true}
            />
          </div>
        ))}

        <div>
          <img
            src={gunNext}
            alt='next'
            onClick={handleNext}
            style={{
              cursor: !isLastCard ? 'pointer' : 'default',
              pointerEvents: isLastCard ? 'none' : 'auto',
            }}
          />
        </div>
      </div>

      <div>
        {currentIndex + 1}/{data.length}
      </div>
    </div>
  );
}

{
  /* <button
            className={style.buttonRadius}
            onClick={handleNext}
            disabled={isLastCard}
          >
            →
          </button> */
}

{
  /* <button
  className={style.buttonRadius}
  onClick={handlePrev}
  disabled={isFirstCard}
>
  ←
</button>; */
}
