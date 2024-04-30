import { useState, useContext } from 'react';
import AddWord from '../../components/AddWord/AddWord';
import Table from '../../components/Table/Table';
import style from './MainPage.module.scss';

import POST from '../../services/POST';

export default function MainPage() {
  //const { dataServer, setDataServer } = useContext(WordServerContext);

  const [newWord, setNewWord] = useState({
    english: '',
    transcription: '',
    russian: '',
  });

  // const handleAddWord = async () => {
  //   console.log('newWord:', newWord);
  //   // Проверяем, что все поля заполнены
  //   if (newWord.english && newWord.transcription && newWord.russian) {
  //     const response = await POST.addWord(newWord);

  //     if (response) {
  //       // Добавляем новое слово к текущим данным
  //       setDataServer((prevData) => [
  //         ...prevData,
  //         {
  //           id: prevData.length + 1, // Присваиваем новому слову уникальный id
  //           word: newWord.english,
  //           transcription: newWord.transcription,
  //           translation: newWord.russian,
  //         },
  //       ]);
  //     }
  //     // Сбрасываем значения ввода
  //     setNewWord({ english: '', transcription: '', russian: '' });
  //   } else {
  //     alert('Пожалуйста, заполните все поля перед добавлением слова.');
  //   }
  // };

  return (
    <div className={style.mainPageBox}>
      <AddWord
      // newWord={newWord}
      // setNewWord={setNewWord}
      // handleAddWord={handleAddWord}
      />
      <Table />
    </div>
  );
}
