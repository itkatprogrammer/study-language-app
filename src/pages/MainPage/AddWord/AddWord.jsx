import { useContext, useState } from 'react';
import { AddWordContext } from '../../../context/NewWordContext';
import AddCell from '../AddCell/AddCell';
import Button from './../../../components/General/Button/Button';
import style from './AddWord.module.scss';

export default function AddWord() {
  const { addWord } = useContext(AddWordContext);
  const [newWord, setNewWord] = useState({
    englishInput: '',
    transcriptionInput: '',
    translationInput: '',
  });

  const handleInputChange = (fieldName, value) => {
    setNewWord((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const handleAddNewWord = () => {
    console.log(newWord);
    const { englishInput, transcriptionInput, translationInput } = newWord;

    if (!englishInput || !transcriptionInput || !translationInput) {
      return;
    }

    const newWordToSend = {
      english: englishInput,
      transcription: transcriptionInput,
      translation: translationInput,
    };

    addWord(newWordToSend);
    setNewWord({
      englishInput: '',
      transcriptionInput: '',
      translationInput: '',
    });
  };

  return (
    <div className={style.addWordBox}>
      <AddCell
        inputTitle='English'
        InputName='inputName'
        inputId='englishInput'
        onChange={handleInputChange}
      />
      <AddCell
        inputTitle='Transcription'
        InputName='inputName'
        inputId='transcriptionInput'
        onChange={handleInputChange}
      />
      <AddCell
        inputTitle='Translation'
        InputName='inputName'
        inputId='translationInput'
        onChange={handleInputChange}
      />

      <Button type='add' buttonName='Add' onClick={handleAddNewWord} />
    </div>
  );
}
