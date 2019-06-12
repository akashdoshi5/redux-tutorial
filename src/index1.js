import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore} from 'redux';

function reducer(state, action){
  console.log(action);
  if(action.type === 'changeState'){
    return action.payload.newState;
  }
  return 'Sky';
}

const store = createStore(reducer);

console.log(store.getState());

const action = {
  type:'changeState',
  payload:{
    newState : 'Akash'
  }
}

store.dispatch(action);

console.log(store.getState());
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
