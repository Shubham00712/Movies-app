import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';


import './index.css';
import App from './components/App';

//middleware
// const logger = ({dispatch,getState}) =>{
//   return function (next) {
//     return function (action) {
//       console.log("ACTION_TYPE: ", action.type)
//       next(action)
//     }
//   }
// }

const logger =({dispatch,getstate}) => (next) =>(action)=>{
  if(typeof action !== 'function')
  console.log("ACTION_TYPE: ",action.type);
  next(action)
}

const thunk=({dispatch,getState})=>(next)=>(action)=>{
  if(typeof action === 'function'){
    action(dispatch)
    return
  }
  next(action)
}

const store=createStore(rootReducer,applyMiddleware(logger,thunk));
console.log("Store",store);
console.log("state",store.getState());
ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);