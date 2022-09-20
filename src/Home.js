import { useEffect, useState } from "react";
import { Even } from "./Even";
import { Odd } from "./Odd";


// Parte 1
// Creare un'applicazione che abbia i componenti Home, Odd e Even
// Visualizzare nel componente Home un bottone che al click ritorna la frase contenuta nell'endpoint http://numbersapi.com/random/math ed inoltre aggiungere due bottoni: even e odd.
// In base al primo numero della frase risultata dall'API, aggiungetela automaticamente al componente Odd o Even; cliccando sui rispettivi pulsanti verrà mostrata la lista di frasi.

// Parte 2
// Per ogni item della lista aggiungere un bottone che cancella l

export function Home() {
    const [data, setData] = useState('')
    const [odd, setOdd] = useState([])
    const [even, setEven] = useState([])

    async function fetchRandom() {
        const response = await fetch('http://numbersapi.com/random/math')
        const data = await response.text()

        setData(data)
        // console.log(data)
        const first = data.split(' ')[0]

        if(first % 2 == 0) {
            setEven((state) => [...state, data])
        } else {
            setOdd((state) => [...state, data])
        }
    }

    useEffect(() => {fetchRandom()}
    , [])
    
    return <div>
        <button onClick={fetchRandom}>Random</button>
        {data && data}
        <Even even={even} />
        <Odd odd={odd} />
        </div>
}