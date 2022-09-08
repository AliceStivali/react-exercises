import React from "react";

export class Container extends React.Component {
    render() {
        return <div className="container">
            <h1 className="container-title">{this.props.title}</h1>
            <hr />
            <div>{this.props.children}</div>
            </div>
    }
}