import React from "react";
import { Counter } from "./Counter";
import { ClickTracker } from "./ClickTracker";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { TodoList } from "./TodoList";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";
import { Sum } from "./Sum";


export class App extends React.Component {
    state = {
        language: 'en'
    }

    handleLanguageChange = (event) => {
        this.setState({
            language: event.target.value
        })
    }

    render() {
        return <div><LanguageContext.Provider value={this.state.language}>
            <select value={this.state.language} onChange={this.handleLanguageChange}>
                <option value="en">ENGLISH</option>
                <option value="it">ITALIANO</option>
           </select>
           <DisplayLanguage />
                <Container title="My App">
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
                    <Sum numbers={[1, 2, 3, 4]}/>
                </Container>
                   </LanguageContext.Provider>
            </div>
    }
}