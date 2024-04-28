import { createContext, useState } from 'react';
import ADD from '../services/ADD';

export const AddWordContext = createContext();

export function AddWordProvider({ children }) {
  const [addedWord, setAddedWord] = useState([]);

  const addWord = async (newWord) => {
    const updatedWord = await ADD.addWord(newWord);
    if (updatedWord) {
      setAddedWord([...addedWord, updatedWord]);
    }
  };

  const value = { addedWord, addWord };

  return (
    <AddWordContext.Provider value={value}>{children}</AddWordContext.Provider>
  );
}
