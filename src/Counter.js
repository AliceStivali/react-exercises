import React from "react";

export class Counter extends React.Component {
    state = {
        count: this.props.initialValue
    }

    handleCounterIncrement = () => {
        this.setState(state => {
            return {
                count: state.count + this.props.incrementedBy
            }
        })
    }


    render() {
        return <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleCounterIncrement}>Increment</button>
        </div>
    }
}

Counter.defaultProps = {
    initialValue: 0,
    incrementedBy: 1
}