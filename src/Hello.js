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
            <Welcome />
        </div>
    }
}

export class Welcome extends React.Component {
    render() {
        return <h2>Hello, {this.props.name}!</h2>
    }
}

Welcome.defaultProps = {
    name: 'Stranger'
  };