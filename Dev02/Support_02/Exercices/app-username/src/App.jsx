import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import Form from './components/Form'
import { lenName } from './features/lenNameSlice'
import { orderName, deletName } from './features/nameSlice'

function App() {
  // useSelector permet de lire le state qui se trouve dans vos createSlice
  const { names, sens } = useSelector(state => state.name)
  const { len, pos } = useSelector(state => state.lenName)
  const dispatch = useDispatch()

  const handleLength = (name, index) => {
    dispatch(lenName({ name, index }))
  }

  const handleDelete = index => {
    dispatch(deletName(index))
  }

  return (
    <>
      <Form />
      <button onClick={() => dispatch(orderName(sens))}>
        Ordre {sens > 0 ? 'croissant' : 'décroissant'}
      </button>
      <ul style={{ listStyle: 'none' }}>
        {names.map((name, index) => <li key={index}>
          {name}
          <br />
          <button
            className='btn'
            onClick={() => handleLength(name, index)}
          >length Name</button>
          {pos === index && <small> {len} </small>}
          <button
            className='btn'
            style={{color : 'red'}}
            onClick={() => handleDelete(index)}
          >delete</button>
        </li>)}
      </ul>

    </>
  )
}

export default App
