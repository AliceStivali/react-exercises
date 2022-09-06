import React from "react";
import { ClickCounter } from "./ClickCounter";

export class Counter extends React.Component {
    state = {
        count: this.props.initialValue
    };
    constructor(state) {
        super(state)
        this.updateCounter = (event) => {
            return (this.setState((state) => (state.count += this.props.incrementedBy)))
        }
    }

    render() {
        return <div>
            <ClickCounter count={this.state.count} clickCounter={this.updateCounter} />
        </div>
    }
}

Counter.defaultProps = {
    initialValue: 0,
    incrementedBy: 1
}