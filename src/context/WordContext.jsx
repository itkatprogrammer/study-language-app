import React, { useState, createContext, useEffect } from 'react';
const API_ALL_WORDS = 'http://itgirlschool.justmakeit.ru/api/words';

const WordContext = createContext();

const WordProvider = ({ children }) => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  //функция получения слов с сервера
  const loadData = async () => {
    try {
      const response = await fetch(API_ALL_WORDS);
      if (!response.ok) {
        throw new Error('Failed to fetch words');
      }
      const data = await response.json();
      setWords(data);
    } catch (error) {
      console.error('Error fetching words:', error);
    }
  };

  //функция добавления нового слова
  const addWord = async (newWord) => {
    try {
      const response = await fetch(`${API_ALL_WORDS}/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          english: newWord.english,
          transcription: newWord.transcription,
          russian: newWord.russian,
          tags: '',
          tags_json: '[""]',
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to fetch add words');
      }

      setWords([...words, newWord]);
    } catch (error) {
      console.error('Error fetching words:', error);
    }
  };

  //функция редактирования слова
  const updateWord = async (id, updatedWord) => {
    const body = {
      id: id,
      english: updatedWord.english,
      transcription: updatedWord.transcription,
      russian: updatedWord.russian,
      tags: '',
      tags_json: '[""]',
    };

    try {
      const response = await fetch(`${API_ALL_WORDS}/${id}/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('Failed to update word');
      }
      const data = await response.json();

      setWords((prevWords) =>
        prevWords.map((word) => (word.id === id ? data : word))
      );
    } catch (error) {
      console.error('Error updating word:', error);
    }
  };

  //функция удаления слова
  const deleteWord = async (wordId) => {
    try {
      const response = await fetch(`${API_ALL_WORDS}/${wordId}/delete`, {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Failed to delete word');
      }
      console.log(words);
      setWords(words.filter((word) => word.id !== wordId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <WordContext.Provider
      value={{ words, setWords, addWord, updateWord, deleteWord }}
    >
      {children}
    </WordContext.Provider>
  );
};

export { WordProvider, WordContext };

// import { createContext, useState, useEffect } from 'react';
// import GET from '../services/GET';

// export const WordServerContext = createContext();

// export function WordServerProvider({ children }) {
//   const [dataServer, setDataServer] = useState(false);
//   const value = { dataServer, setDataServer };

//   useEffect(() => {
//     getWordsServer();
//   }, []);

//   async function getWordsServer() {
//     const wordsServer = await GET.getWords();
//     setDataServer(wordsServer);
//   }

//   if (!dataServer) {
//     return <h1>Loading...</h1>;
//   }

//   return (
//     <WordServerContext.Provider value={value}>
//       {children}
//     </WordServerContext.Provider>
//   );
// }
