import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
    state = {
        count: this.props.initialValue
    }

    render() {
        return <div>
            <CounterDisplay count={this.state.count} />
        </div>
    }
}

Counter.defaultProps = {
    initialValue: 0,
    incrementedBy: 1
}