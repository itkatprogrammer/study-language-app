import { useState } from 'react';
import data from './../../data';
import Card from './../../components/General/Card/Card';
import style from './CardsPage.module.scss';

export default function CardsPage() {
  const [learnedWords, setLearnedWords] = useState(0);
  const [clickedCards, setClickedCards] = useState(new Set());

  const handleCheck = (id) => {
    if (!clickedCards.has(id)) {
      setLearnedWords(learnedWords + 1);
      setClickedCards(new Set(clickedCards).add(id));
    }
  };

  return (
    <div className={style.cardsListBg}>
      <div className={style.cardsList}>
        <div className='headerName'>
          <p>
            Изучено слов: {learnedWords}/{data.length}
          </p>
        </div>

        <div className={style.cardsLine}>
          {data.map((word) => (
            <Card
              key={word.id}
              word={word.word}
              transcription={word.transcription}
              translation={word.translation}
              handleCheck={handleCheck}
              className={style.card}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
