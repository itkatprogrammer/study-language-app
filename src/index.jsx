import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.scss';
import { WordServerProvider } from './context/WordServerContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WordServerProvider>
      <App />
    </WordServerProvider>
  </React.StrictMode>
);
