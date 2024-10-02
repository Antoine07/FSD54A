import { useState } from 'react'

import Form from "./Form"

function Conversion() {
    const [decimal, setDecimal] = useState('')
    const [binary, setBinary] = useState('')
    const [message, setMessage] = useState('')

    // logique de la conversion ici
    const handleChange = (e, type) => {
        // error first

        // si c'est vide on ne fait rien on nettoye les champs
        if(e === '') {
            setBinary('')
            setDecimal('')

            return
        }

        // si ce n'est pas un décimal on affiche un message d'erreur
        if (type === 'decimal' && isNaN(e)  ) {
            setMessage(`problème de type : ${e} `)

            return
        }

        // /^[0,1]{1,}$ <=> doit commencer par 0 ou 1 et se terminer par 0 1 et avoir de 1 à N nombres
        // ^ commencer par et $ se terminer par 
        if (type === 'binary' && !/^[0,1]{1,}$/.test(e) ) {
            setMessage(`problème de type : ${e} `)

            return
        }

        // on réinitialise les messages 
        setMessage('')

        if (type === 'decimal') {
            setDecimal(e)
            
            setBinary(parseInt(e, 10).toString(2))
            console.log(e, type)
        }

        if (type === 'binary') {
            setBinary(e)
            setDecimal(parseInt(e, 2).toString(10))
            console.log(e, type)
        }
    }

    return (
        <div>
            <h1>Convertisseur Décimal/Binaire</h1>
            { message && <p style={{ color: 'red' }}>{message}</p>}
            <Form
                conversion={decimal}
                type="decimal"
                handleChange={handleChange}
            />
            <Form
                conversion={binary}
                type="binary"
                handleChange={handleChange}
            />
        </div>
    );
}


export default Conversion
