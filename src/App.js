import React from "react";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";


export class App extends React.Component {
    render() {
        return <div>
            <Welcome name={<strong>Alice</strong>} age={30}/>
            <Counter />
        </div>
    }
}