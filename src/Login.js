import React from "react";

export class Login extends React.Component {
    state = {
        username: '',
        password: '',
        remember: false
    }
    handleInputChange = (event) => {
        const value = event.target.value
        const name = event.target.name

        this.setState({
            [name]: value
        })
    }

    handleCheckboxChange = (event) => {
        const name = event.target.name
        const checked = event.target.checked

        this.setState({
            [name]: checked
        })
    }

    render() {
        return <div>
            <h2>Username</h2>
            <input name="username" value={this.state.username} onChange={this.handleInputChange} />
            <h2>Password</h2>
            <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
            <span>Remember
            <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleCheckboxChange} />
            </span>
        </div>
    }
}