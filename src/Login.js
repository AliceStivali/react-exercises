import React from "react";

export class Login extends React.Component {
    state = {
        username: '',
        password: '',
        remember: false,

    }
    handleInputChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        const type = event.target.type
        const checked = event.target.checked

        this.setState({
            [name]: type === 'checkbox' ? checked : value
        })
    }

    onLogin = (state) => {
        console.log(state)
    }


    render() {
        return <div>
            <h2>Username</h2>
            <input name="username" value={this.state.username} onChange={this.handleInputChange} />
            <h2>Password</h2>
            <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
            <span>Remember
            <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange} />
            </span>
            <div><button name="login" disabled={this.state.username && this.state.password ? false : true} onClick={this.onLogin}>Login</button></div>
        </div>
    }
}