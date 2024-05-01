import { useState } from 'react';
import data from './../../data';
import Card from './../../components/General/Card/Card';
import style from './CardsPage.module.scss';
import { useContext } from 'react';
import { WordContext } from '../../context/WordContext';

export default function CardsPage() {
  const { words } = useContext(WordContext);

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
        <div className={style.headerName}>
          <p>
            Изучено слов: {learnedWords}/{words.length}
          </p>
        </div>

        <div className={style.cardsLine}>
          {words.map((word) => (
            <Card
              key={word.id}
              id={word.id}
              word={word.english}
              transcription={word.transcription}
              translation={word.russian}
              handleCheck={handleCheck}
              className={style.card}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
