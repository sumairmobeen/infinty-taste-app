import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStateProvider } from './context/globalContext';
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <Router>
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  </Router>
  ,
  document.getElementById('root')
);


reportWebVitals();
