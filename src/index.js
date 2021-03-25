import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ContextStoreProvider} from "./ContextStore"
import { BrowserRouter as Router} from 'react-router-dom'





ReactDOM.render(
  
    <ContextStoreProvider >
      <App />
    </ContextStoreProvider >,
  
  document.getElementById('root')
);
