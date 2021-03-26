import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ContextStoreProvider} from "./ContextStore"
import { BrowserRouter as Router } from 'react-router-dom'





ReactDOM.render(
  
    <ContextStoreProvider >
        <Router>
          <App />
        </Router>
    </ContextStoreProvider >,
  
  document.getElementById('root')
);
