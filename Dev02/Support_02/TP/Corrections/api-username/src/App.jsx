import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './features/users';

import './App.css'

function App() {
  const dispatch = useDispatch()
  const { users } = useSelector(state => state.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])


  return (
    <>
    {users.map((user, i) => <p key={i}>{user.name}</p>)}
    </>
  )
}

export default App
