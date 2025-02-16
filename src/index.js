import React from 'react';
import ReactDOM from 'react-dom/client';
import { BillProvider } from './BillContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BillProvider>
      <App />
    </BillProvider>
  </React.StrictMode>
);