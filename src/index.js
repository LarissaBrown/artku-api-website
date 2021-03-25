import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ContextStoreProvider} from "./ContextStore"






ReactDOM.render(
  
    <ContextStoreProvider >
      <App />
    </ContextStoreProvider >,
  
  document.getElementById('root')
);
