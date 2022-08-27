import React from "react"

export class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                <Message />
            </div>
        )
    }
}

export class Message extends React.Component {
    render() {
        return <p>What a beautiful day!</p>
    }
}

export class App extends React.Component {
    render() {
        return <div>
            <Welcome name={<strong>Alice</strong>}/>
        </div>
    }
}

export class Welcome extends React.Component {
    render() {
        return <div>
            <h2>Hello, {this.props.name}!</h2>
            <p>Your age is {this.props.age}</p>
            </div>
    }
}

Welcome.defaultProps = {
    name: 'Stranger'
  };