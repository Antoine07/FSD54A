import { addName, setMessage } from '../features/nameSlice'
import { useDispatch, useSelector } from 'react-redux'

import { useState } from 'react'

function Form() {
    const dispatch = useDispatch()
    // comme le state est global on peut le lire pour récupérer les données
    const { message } = useSelector(state => state.name)
    // le state suivant avec useState est local au composant (scopé)
    const [username, setUsername] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        // error first
        if ( username.trim() === '' ) {
            dispatch(setMessage(`champ vide`))

            return
        }

        dispatch(addName(username))
        setUsername('')
    }

    return (
        <div>
            {message && <p style={{ color: 'red' }}>{message}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <p><button onClick={handleSubmit}>Add</button></p>
            </form>
        </div>)
}

export default Form
