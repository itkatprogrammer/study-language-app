import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.scss';
import { DataServerProvider } from './context/DataServerContext.jsx';
import { AddWordProvider } from './context/NewWordContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AddWordProvider>
      <DataServerProvider>
        <App />
      </DataServerProvider>
    </AddWordProvider>
  </React.StrictMode>
);
