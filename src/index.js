import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import movies from './reducers';


import './index.css';
import App from './components/App';

const store=createStore(movies);
console.log("Store",store);
console.log("state",store.getState());
ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);