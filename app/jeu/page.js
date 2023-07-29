"use client"
import { useState } from "react";

const jeu = () => {

    const [number, setNumber] = useState(0)

    const increment = () => {
        // alert('vous avez cliqué sur le bouton !')
        setNumber(number + 1)        
    }

    const decrement = () => {
        setNumber(number - 1)
    }

    return (
        <> 
            <div>{number}</div>
            <button onClick={() => increment()}>Increment</button>
            <button onClick={() => decrement()}>Decrement</button>
        </>
    )
}

export default jeu