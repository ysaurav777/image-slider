import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App url={"https://picsm.photos/v2/list"} limit={"10"} page={"1"}/>
  </React.StrictMode>
);