import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import Form from './components/Form'
import { lenName } from './features/lenNameSlice'

function App() {
  // useSelector permet de lire le state qui se trouve dans vos createSlice
  const { names } = useSelector(state => state.name)
  const { len, pos } = useSelector(state => state.lenName)
  const dispatch = useDispatch()

  const handleLength = (name, index) => {
    dispatch(lenName({ name, index }))
  }

  return (
    <>
      <Form />
      <ul style={{ listStyle: 'none' }}>
        {names.map((name, index) => <li key={index}>
          {name}
          <br />
          <button 
            className='btn' 
            onClick={() => handleLength(name, index)}
          >length Name</button>
          {pos === index && <small> {len} </small>}
        </li>)}
      </ul>

    </>
  )
}

export default App
