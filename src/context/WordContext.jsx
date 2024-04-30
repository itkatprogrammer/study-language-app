import React, { useState, createContext, useEffect } from 'react';
import GET from '../services/GET';
import POST from '../services/POST';
import PUT from '../services/PUT';
import DELETE from '../services/DELETE';
// const API_ALL_WORDS = 'http://itgirlschool.justmakeit.ru/api/words';

const WordContext = createContext();

const WordProvider = ({ children }) => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  //функция получения слов с сервера короткий вариант
  async function loadData() {
    const data = await GET.getWords();
    setWords(data);
  }

  //функция добавления нового слова короткий вариант
  async function addWord(newWord) {
    await POST.addWord(newWord);
    setWords([...words, newWord]);
  }

  //функция редактирования слова короткий вариант
  async function updateWord(id, updatedWord) {
    await PUT.editWord(id, updatedWord);

    setWords((prevWords) =>
      prevWords.map((word) => (word.id === id ? updatedWord : word))
    );
  }

  //функция удаления слова короткий вариант
  async function deleteWord(wordId) {
    await DELETE.removeWord(wordId);

    setWords(words.filter((word) => word.id !== wordId));
  }

  return (
    <WordContext.Provider
      value={{ words, setWords, addWord, updateWord, deleteWord }}
    >
      {children}
    </WordContext.Provider>
  );
};

export { WordProvider, WordContext };

//функция получения слов с сервера длинный вариант
// const loadData = async () => {
//   try {
//     const response = await fetch(API_ALL_WORDS);
//     if (!response.ok) {
//       throw new Error('Failed to fetch words');
//     }
//     const data = await response.json();
//     setWords(data);
//   } catch (error) {
//     console.error('Error fetching words:', error);
//   }
// };

//функция добавления нового слова длинный вариант
// const addWord = async (newWord) => {
//   try {
//     const response = await fetch(`${API_ALL_WORDS}/add`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json;charset=utf-8',
//       },
//       body: JSON.stringify({
//         english: newWord.english,
//         transcription: newWord.transcription,
//         russian: newWord.russian,
//         tags: '',
//         tags_json: '[""]',
//       }),
//     });
//     if (!response.ok) {
//       throw new Error('Failed to fetch add words');
//     }

//     setWords([...words, newWord]);
//   } catch (error) {
//     console.error('Error fetching words:', error);
//   }
// };

//функция редактирования слова длинный вариант
// const updateWord = async (id, updatedWord) => {
//   const body = {
//     id: id,
//     english: updatedWord.english,
//     transcription: updatedWord.transcription,
//     russian: updatedWord.russian,
//     tags: '',
//     tags_json: '[""]',
//   };

//   try {
//     const response = await fetch(`${API_ALL_WORDS}/${id}/update`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(body),
//     });

//     if (!response.ok) {
//       throw new Error('Failed to update word');
//     }
//     const data = await response.json();

//     setWords((prevWords) =>
//       prevWords.map((word) => (word.id === id ? data : word))
//     );
//   } catch (error) {
//     console.error('Error updating word:', error);
//   }
// };

//функция удаления слова длинный вариант
// const deleteWord = async (wordId) => {
//   try {
//     const response = await fetch(`${API_ALL_WORDS}/${wordId}/delete`, {
//       method: 'POST',
//     });

//     if (!response.ok) {
//       throw new Error('Failed to delete word');
//     }
//     console.log(words);
//     setWords(words.filter((word) => word.id !== wordId));
//   } catch (error) {
//     console.error('Error deleting task:', error);
//   }
// };
