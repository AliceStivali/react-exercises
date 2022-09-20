import React from "react";
import { Link } from "react-router-dom";
import { Age } from "./Age";

export function Welcome({ name }) {
    return (
        <div>
            {name && <h2>Hello, {name}!</h2>}
            {!name && <h2>Hello, stranger!</h2>}
            <Age age={30}/>
            <Link to="/counter">Counter</Link>
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