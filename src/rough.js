import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'; 

// STORE -> GLOBALIZE STATE

// ACTION INCREMENT/DECREMENT
const increment =()=>{
    return {
      type: 'INCREMENT'
    }
  };
  const decrement =()=>{
    return {
      type: 'DECREMENT'
    }
  };
  
  // REDUCER
  const counter =(state = 0, action)=>{
    switch(action.type){
      case 'INCREMENT':
        return state+1;
        case 'DECREMENT':
          return state-1; 
    }
  }
  
  let store = createStore(counter);
  
  // DISPLAY IN THE CONSOLE
  store.subscribe(()=> console.log(store.getState()));
  
  // DISPATCH
  store.dispatch(increment());
  store.dispatch(decrement());