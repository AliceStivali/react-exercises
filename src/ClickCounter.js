import React from "react";
import { Counter } from "./Counter";

export class ClickCounter extends React.Component {

    handleCounterIncrement = () => {
        this.setState(state => {
            return {
                count: state.count + this.props.incrementedBy
            }
        })
    }

    render() {
        return <div>
        <Counter />
        <button onClick={this.handleCounterIncrement}>Increment</button>
        </div>
    }
}