import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, signIn } from './actions'
function App() {
  const counter = useSelector(state=>state.counter)
  const isLogged = useSelector(state=>state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={()=>dispatch(increment(5))}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <br />
      <br />
      <button onClick={()=>dispatch(signIn())}>LogIn</button>
      {isLogged? <h3>'Valuable Information'</h3>: ''}
      
    </div>
  );
}

export default App;
