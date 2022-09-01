import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
    state = { username: ''}

    handleUsernameInput = (event) => {
        this.setState({ username: event.target.value })
    }
    render() {
        return <div>
            <input name='username' value={this.state.username} onChange={this.handleUsernameInput} />
            <Welcome name={this.state.username} />
        </div>
    } 
}