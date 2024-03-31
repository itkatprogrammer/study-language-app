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
    <div>
      <p>Изучено слов: {learnedWords}</p>
      <div className={style.cardsList}>
        {
          data.map(word => (
            <Card key={word.id} word={word.word} transcription={word.transcription} translation={word.translation} handleChecked={handleChecked} />
          ))
        }
      </div>
    </div>

  )
}