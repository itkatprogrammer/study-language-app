import { useState } from "react";
import data from './../../data'
import Card from './../../components/General/Card/Card'
import style from './CardsPage.module.scss'


export default function CardsPage() {

  const [learnedWords, setLearnedWords] = useState(0)

  const handleChecked = () => {
    setLearnedWords(learnedWords + 1)
  }


  return (
    <div className={style.cardsListBg}>

      <div className={style.cardsList}>
        <div className='headerName'>
          <p>Изучено слов: {learnedWords}</p>
        </div>

        <div className={style.cardsLine}>
          {
            data.map(word => (
              <Card key={word.id} word={word.word} transcription={word.transcription} translation={word.translation} handleChecked={handleChecked} className={style.card} />
            ))
          }
        </div>
      </div>
    </div>

  )
}
