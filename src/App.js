import React from "react";
import { Counter } from "./Counter";
import { ClickTracker } from "./ClickTracker";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { TodoList } from "./TodoList";
import { Container } from "./Container";
import { DisplayLanguage } from "./DisplayLanguage";


export class App extends React.Component {
    render() {
        return <Container title="My App">
                    <DisplayLanguage />
                    <InteractiveWelcome />
                    <Counter initialValue={0} incrementedBy={1} timeout={1000}/>
                    <ClickTracker />
                    <Login />
                    <UncontrolledLogin />
                    <TodoList 
                    render={(state, remove) => state.todos.map((todo, index) => 
                        <li key={index}>{todo} <button onClick={remove}>Remove</button></li>
                        )
                    }
                    ></TodoList>
                </Container>
            
    }
}