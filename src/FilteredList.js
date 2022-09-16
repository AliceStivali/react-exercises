import { useEffect, useMemo, useState } from "react"

const persons = [
    {id: 1, name: 'Bob', age: 20},
    {id: 2, name: 'Sarah', age: 15},
    {id: 3, name: 'Paul', age: 35},
    {id: 4, name: 'Mary', age: 27},
    {id: 5, name: 'Max', age: 17}
]


export function FilteredList({ personList = persons }) {
    const [list, setList] = useState(personList)

    const adults = useMemo(() => list.filter(item => item.age >= 18), [])
    useEffect(() => {setList(adults)}, [])
    console.log(list)

    return <div>
        <h2>Adults:</h2>
        {list && list.map(item => <li>{item.name}, {item.age}</li>)}
    </div>
}