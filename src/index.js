import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import {HashRouter} from 'react-router-dom';
import store from './ducks/store'
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'
ReactDOM.render(
    <BrowserRouter>
    <Provider store={ store }>
      <App />
    </Provider>
  </BrowserRouter>, 
 document.getElementById('root'));
registerServiceWorker();
