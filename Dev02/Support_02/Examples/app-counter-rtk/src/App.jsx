
// useDispatch permet d'envoyer une action dans createSlice
// useSelector permet de lire le state dans le createSlice
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counterSlice'

import './App.css'

function App() {
  // fonction de dispatch
  const dispatch = useDispatch()
  // la lecture du store (states)
  const { value, step } = useSelector( s => s.counter )

  return (
    <>
      <h1>Hello RTK : count: {value} - step : {step} </h1>
      <p><button onClick={() => dispatch(increment())}>+1</button></p>
      <p><button onClick={() => dispatch(decrement())}>-1</button></p>
      <p><button onClick={() => dispatch(incrementByAmount(5))}>+5</button></p>
    </>
  )
}

export default App
