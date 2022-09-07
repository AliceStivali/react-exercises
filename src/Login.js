import React from "react";

export class Login extends React.Component {
    state = {
        username: '',
        password: '',
        remember: false,
        disabled: true,
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

    handleResetState = () => {
        this.setState({
            username: '',
            password: '',
            remember: false
        })
    }


    render() {
        const ButtonStyle = {
            backgroundColor: (this.state.password.length < 8) ? 'red' : 'green'
        }
        return <div>
            <h2>Username</h2>
            <input name="username" value={this.state.username} onChange={this.handleInputChange} />
            <h2>Password</h2>
            <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
            <span>Remember
            <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange} />
            </span>
            <div><button name="login" disabled={this.state.username && this.state.password ? false : true} style={ButtonStyle}>Login</button></div>
            <div><button onClick={this.handleResetState}>Reset</button></div>
        </div>
    }
}