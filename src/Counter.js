import React, { useState, useEffect } from "react";


export function Counter (props){
    const [counter, setCounter] = useState(props.initialValue)

    useEffect(() => {
    const interval = setInterval(() => 
        setCounter(c => c + 1), 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return <div>
        <h1>Count: {counter}</h1>
    </div>
}



// export class Counter extends React.Component {
//     state = {
//         count: this.props.initialValue
//     }

//     handleCounterIncrement = () => {
//         this.setState(state => {
//             return {
//                 count: state.count + this.props.incrementedBy
//             }
//         })
//     }


//     render() {
//         return <div>
//             <h1>Count: {this.state.count}</h1>
//             <button onClick={this.handleCounterIncrement}>Increment</button>
//         </div>
//     }
// }

// Counter.defaultProps = {
//     initialValue: 0,
//     incrementedBy: 1
// }