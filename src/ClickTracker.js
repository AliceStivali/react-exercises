import React, {useState} from "react";

export class ClickTracker extends React.Component {
state = {}
    handleButtonClick = (event) => {
        this.setState(state => {
            return {name: event.target.className}
        })
        console.log(event.target)
    }


    render() {
        return <div>
            <button className="1" onClick={this.handleButtonClick}>Button 1</button>
            <button className="2" onClick={this.handleButtonClick}>Button 2</button>
            <button className="3" onClick={this.handleButtonClick}>Button 3</button>
            <h1>The last button you clicked is: {this.state.name}</h1>
        </div>
    }
}