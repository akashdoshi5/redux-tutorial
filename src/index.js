import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {combineReducers, createStore} from 'redux';

function productsReducer(state = [], action){
  switch(action.type){
    case 'addProduct':
      //return state.push(action.payload)
       return {
         ...state,
         ...state.push(action.payload)
       }
  }
  return state;
}

function userReducer(state = '', action){
  switch(action.type){
    case 'updateUser':
      return action.payload;
  }
  return state;
}

const allReducers = combineReducers({
  products : productsReducer,
  user : userReducer
})

const store = createStore(
  allReducers,
  {
    products : [{name : 'iPhone'}],
    user : 'Akash'
  },
  window.devToolsExtension && window.devToolsExtension()
);

console.log(store.getState());

const updateUserAction = {
  type: 'updateUser',
  payload: {
    user: 'Doshi'
  }
}

let count=0;
const addProductAction = {
  type: 'addProduct',
  payload: {
    name: 'Android ' + ++count
  }
}


store.dispatch(updateUserAction);
store.dispatch(addProductAction);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
