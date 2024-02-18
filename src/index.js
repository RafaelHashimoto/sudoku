import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Global styles
import App from './App'; // The root component of your application

// If you're using service workers, you might also import serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
