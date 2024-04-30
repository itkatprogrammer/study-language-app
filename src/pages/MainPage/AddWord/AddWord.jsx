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

    // Добавляем console.log для проверки ввода newWord
    console.log('New word to add:', newWordToSend);

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
        value={newWord.english}
        onChange={(e) => handleInputChange('english', e.target.value)}
      />
      <AddCell
        inputId='transcription'
        inputTitle='Transcription'
        InputName='transcription'
        value={newWord.transcription}
        onChange={(e) => handleInputChange('transcription', e.target.value)}
      />
      <AddCell
        inputId='russian'
        inputTitle='Translation'
        InputName='russian'
        value={newWord.russian}
        onChange={(e) => handleInputChange('russian', e.target.value)}
      />

      <Button type='add' buttonName='Add' onClick={handleAddNewWord} />
    </div>
  );
}
