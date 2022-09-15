import { useCounter } from "./useCounter"

export function ClickCounter ({initialValue = 0}){
    const { counter, onIncrement, onDecrement, onReset} = useCounter(initialValue)

    return <div>
        <h1>Count: {counter}</h1>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={onReset}>Reset</button>
    </div>
}




// export function ClickCounter({ initialValue = 0 }) {
//     const [counter, setCounter] = useState(initialValue)

//     const onCounterChange = () => {
//         console.log(`The counter is now ${counter}`)
//     }

//     useEffect(onCounterChange, [counter])

//     function handleCounterIncrement() {
//         setCounter(c => c + 1)
//     }

//     return <div>
//         <h2>Counter: {counter}</h2>
//         <button onClick={handleCounterIncrement}>Increment</button>
//     </div>
// }