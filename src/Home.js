import { useState } from "react";
import useSWR from "swr";


// Convertire l'esercizio di Odd e Even per gestire una lista di todo.
// Utilizzare l'api fornita nell'esercizio Odd e Even per ottenere delle frasi da inserire nella lista "ToDo" 
// la quale conterrà tutti gli elementi che non sono ancora stati contrassegnati come completati. Ogni riga di 
// questa lista avrà un bottone che chiamerai "Completa" che servirà a completare i task e aspostarli nella lista "Done". 
// Entrambe le liste devono essere sempre in vista.


export function Home() {
    const fetcher = url => fetch(url).then(response => response.text())
    const {data, mutate} = useSWR('http://numbersapi.com/random/math', fetcher)
    const [todo, setTodo] = useState([]) 
    const [done, setDone] = useState([])

    function handleFetch() {
        mutate()
        setTodo(prev => [...prev, data])
    }

    function addToDone(e) {
        const value = e.target.id
        setDone(prev => [...prev, todo.splice(value, 1)])
    }

    return <div>
        <button onClick={handleFetch}>Fetch</button>
        <div>To do:</div>
        {todo && todo.map((item, index) => <li key={index}>{item} <button id={index} onClick={addToDone}>Complete</button></li>)}
        <div>Done:</div>
        {done && done.map((item, index) => <li key={index}>{item}</li>)}
    </div>
}

export default Home;