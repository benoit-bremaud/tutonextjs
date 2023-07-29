"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

const jeu = () => {

    const [number, setNumber] = useState(0)

    const increment = () => {
        // alert('vous avez cliqué sur le bouton !')
        setNumber(number + 1)        
    }

    const decrement = () => {
        setNumber(number - 1)
    }

    useEffect(() => {
        // alert('La page vient de se charger !')
        // console.log('Le nombre a changé')
        return () => {
            console.log('Le composant est démonté')
        }
    }, [])

    return (
        <> 
            <Link href="/cv">CV</Link>
            <div>{number}</div>
            <button onClick={() => increment()}>Increment</button>
            <button onClick={() => decrement()}>Decrement</button>
        </>
    )
}

export default jeu