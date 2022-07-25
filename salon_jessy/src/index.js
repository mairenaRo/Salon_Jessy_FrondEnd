import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from "react-dom";
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
render(<App/>, document.getElementById('root'));

reportWebVitals();