import React from "react";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ClickTracker } from "./ClickTracker";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { TodoList } from "./TodoList";
import { Container } from "./Container";


export class App extends React.Component {
    render() {
        return <Container>
            <InteractiveWelcome />
            <Counter initialValue={0} incrementedBy={1} timeout={1000}/>
            <ClickTracker />
            <Login />
            <UncontrolledLogin />
            <TodoList />
        </Container>
    }
}