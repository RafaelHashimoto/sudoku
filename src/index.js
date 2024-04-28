import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Global styles
import App from './App'; // The root component of your application

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
