import React from "react";
import { Age } from "./Age";

export function Welcome(props) {
    return (
        <div>
            {props.name && <h2>Hello, {props.name}!</h2>}
            {!props.name && <h2>Hello, stranger!</h2>}
        </div>
    )
}



// export class Welcome extends React.Component {
//     render() {
//         return <div className="welcome">
//             <h2>Hello, {this.props.name}!</h2>
//             {this.props.age > 18 
//             ? <Age age={this.props.age}/>
//             : <p>You are very young!</p>}
//             </div>
//     }
// }

// Welcome.defaultProps = {
//     name: 'Stranger'
//   };