import React from "react";
import { ClickTracker } from "./ClickTracker";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { TodoList } from "./TodoList";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";
import { Sum } from "./Sum";
import { ClickCounter } from "./ClickCounter";
import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";
import { FilteredList } from "./FilteredList";



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
                    <ClickCounter />
                    {/* <Counter initialValue={0} incrementedBy={1} timeout={1000}/> */}
                    <ClickTracker />
                    <Login />
                    <UncontrolledLogin />
                    <TodoList 
                    render={(state, remove) => state.todos.map((todo, index) => 
                        <li key={index}>{todo} <button value={index} onClick={remove}>Remove</button></li>
                        )
                    }
                    ></TodoList>
                    <Sum />
                    {/* <Counter initialValue={0}/> */}
                    <GithubUser username='AliceStivali'/>
                    <GithubUserList />
                    <FilteredList />
                </Container>
                   </LanguageContext.Provider>
            </div>
    }
}