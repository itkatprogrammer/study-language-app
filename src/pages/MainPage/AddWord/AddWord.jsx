import { useContext, useState } from 'react';
import AddCell from '../AddCell/AddCell';
import Button from './../../../components/General/Button/Button';
import style from './AddWord.module.scss';
import { WordContext } from '../../../context/WordContext';

export default function AddWord() {
  const { addWord } = useContext(WordContext);

  const [newWord, SetNewWord] = useState({
    english: '',
    transcription: '',
    russian: '',
  });

  const handleInputChange = (fieldName, value) => {
    SetNewWord((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const handleAddNewWord = () => {
    const { english, transcription, russian } = newWord;

    if (!english || !transcription || !russian) {
      return;
    }

    const newWordToSend = {
      english: english,
      transcription: transcription,
      russian: russian,
    };

    addWord(newWordToSend);

    SetNewWord({
      english: '',
      transcription: '',
      russian: '',
    });
  };

  return (
    <div className={style.addWordBox}>
      <AddCell
        inputId='english'
        inputTitle='English'
        InputName='english'
        // value={english}
        onChange={handleInputChange}
      />
      <AddCell
        inputId='transcription'
        inputTitle='Transcription'
        InputName='transcription'
        // value={transcription}
        onChange={handleInputChange}
      />
      <AddCell
        inputId='russian'
        inputTitle='Translation'
        InputName='russian'
        // value={russian}
        onChange={handleInputChange}
      />

      <Button type='add' buttonName='Add' onClick={handleAddNewWord} />
    </div>
  );
}
