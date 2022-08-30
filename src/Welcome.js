import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
    render() {
        return <div>
            <h2>Hello, {this.props.name}!</h2>
            {this.props.age > 18 
            ? <Age />
            : <p>You are very young!</p>}
            </div>
    }
}

Welcome.defaultProps = {
    name: 'Stranger'
  };