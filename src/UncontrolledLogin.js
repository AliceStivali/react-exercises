import React, { createRef } from "react";

export class UncontrolledLogin extends React.Component {
    _formRef = createRef() 
    handleFormChange = (event) => {

        const username = this._formRef.current.elements.username.value
        const password = this._formRef.current.elements.password.value
        const remember = this._formRef.current.remember.checked
        
    
        console.log({username, password, remember})

        if(username && password) {
            this._formRef.current.elements.login.disabled = false
        } else {
            this._formRef.current.login.disabled = true
        }
    }

    componentDidMount() {
        this._formRef.current.elements.username.focus()
    }
    
    render() {
        return <div>
            <h3>Uncontrolled form</h3>
            <form ref={this._formRef} onChange={this.handleFormChange}>
                <input name="username" />
                <input name="password" type="password" />
                <input name="remember" type="checkbox" />
                <button name="login" type="submit" disabled>Login</button>
                <button type="reset">Reset</button>
            </form>
        </div>
    }
}