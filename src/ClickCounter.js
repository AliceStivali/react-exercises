import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class ClickCounter extends React.Component {

    // handleCounterIncrement = () => {
    //     this.setState(state => {
    //         return {
    //             count: state.count + this.props.incrementedBy
    //         }
    //     })
    // }

    render() {
        return <div>
        <CounterDisplay count={this.props.count} />
        <button onClick={this.props.clickCounter}>Increment</button>
        </div>
    }
}