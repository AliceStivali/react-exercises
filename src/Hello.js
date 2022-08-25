import React from "react"

class Hello extends React.Component {
    render() {
        return <h1>Hello, World!</h1>
    }
}

class App extends React.Component {
    render() {
        return <div>{Hello}</div>
    }
}