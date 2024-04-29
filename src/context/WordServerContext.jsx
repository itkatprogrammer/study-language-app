import { createContext, useState, useEffect } from 'react';
import GET from '../services/GET';

export const WordServerContext = createContext();

export function WordServerProvider({ children }) {
  const [dataServer, setDataServer] = useState(false);
  const value = { dataServer, setDataServer };

  useEffect(() => {
    getWordsServer();
  }, []);

  async function getWordsServer() {
    const wordsServer = await GET.getWords();
    setDataServer(wordsServer);
  }

  if (!dataServer) {
    return <h1>Loading...</h1>;
  }

  return (
    <WordServerContext.Provider value={value}>
      {children}
    </WordServerContext.Provider>
  );
}