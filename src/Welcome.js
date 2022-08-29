import React from "react";

export class Welcome extends React.Component {
    render() {
        return <div>
            <h2>Hello, {this.props.name}!</h2>
            {this.props.age > 18 && <Age />}
            {this.props.age < 65 && <Age />}
            </div>
    }
}

Welcome.defaultProps = {
    name: 'Stranger'
  };