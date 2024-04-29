import AddCell from '../AddCell/AddCell';
import Button from './../../../components/General/Button/Button';
import style from './AddWord.module.scss';

export default function AddWord({ newWord, setNewWord, handleAddWord }) {
  const { english, transcription, russian } = newWord;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewWord((prevNewWord) => ({
      ...prevNewWord,
      [name]: value,
    }));
  };

  return (
    <div className={style.addWordBox}>
      <AddCell
        inputId='englishInput'
        inputTitle='English'
        InputName='english'
        value={english}
        onChange={handleChange}
      />
      <AddCell
        inputId='transcriptionInput'
        inputTitle='Transcription'
        InputName='transcription'
        value={transcription}
        onChange={handleChange}
      />
      <AddCell
        inputId='translationInput'
        inputTitle='Translation'
        InputName='russian'
        value={russian}
        onChange={handleChange}
      />

      <Button type='add' buttonName='Add' onClick={handleAddWord} />
    </div>
  );
}
