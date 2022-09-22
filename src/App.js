import { Routes, Route } from "react-router-dom";
import { Welcome } from "./Welcome"
import { Counter } from "./Counter"
import { GithubUser } from "./GithubUser";
import { Link } from "react-router-dom";

export function App() {
    return <div>
        <Routes> 
            <Route path="/" element={<Welcome name="Alice" />} />
            <Route path="counter" element={<Counter />} />
            <Route path="githubuser/:username" element={<GithubUser />} />
            <Route path="*" element={<div><p>Not found</p>
                <Link to="/">Go Home</Link>
                </div>} />
        </Routes>
        <Link to="/">Welcome</Link> <Link to="/counter">Counter</Link> <Link to="/githubuser/AliceStivali">Alice's profile</Link>
        </div>
}







// import React from "react";
// import { ClickTracker } from "./ClickTracker";
// import { InteractiveWelcome } from "./InteractiveWelcome";
// import { Login } from "./Login";
// import { UncontrolledLogin } from "./UncontrolledLogin";
// import { TodoList } from "./TodoList";
// import { Container } from "./Container";
// import { LanguageContext } from "./LanguageContext";
// import { DisplayLanguage } from "./DisplayLanguage";
// import { Sum } from "./Sum";
// import { ClickCounter } from "./ClickCounter";
// import { GithubUser } from "./GithubUser";
// import { GithubUserList } from "./GithubUserList";
// import { FilteredList } from "./FilteredList";
// import { CarDetails } from "./CarDetails";



// export class App extends React.Component {
//     state = {
//         language: 'en'
//     }

//     handleLanguageChange = (event) => {
//         this.setState({
//             language: event.target.value
//         })
//     }

//     render() {
//         return <div><LanguageContext.Provider value={this.state.language}>
//             <select value={this.state.language} onChange={this.handleLanguageChange}>
//                 <option value="en">ENGLISH</option>
//                 <option value="it">ITALIANO</option>
//            </select>
//            <DisplayLanguage />
//                 <Container title="My App">
//                     <InteractiveWelcome />
//                     <ClickCounter />
//                     {/* <Counter initialValue={0} incrementedBy={1} timeout={1000}/> */}
//                     <ClickTracker />
//                     <Login />
//                     <UncontrolledLogin />
//                     <TodoList 
//                     render={(state, remove) => state.todos.map((todo, index) => 
//                         <li key={index}>{todo} <button value={index} onClick={remove}>Remove</button></li>
//                         )
//                     }
//                     ></TodoList>
//                     <Sum />
//                     {/* <Counter initialValue={0}/> */}
//                     <GithubUser username='AliceStivali'/>
//                     <GithubUserList />
//                     <FilteredList />
//                     <CarDetails />
//                 </Container>
//                    </LanguageContext.Provider>
//             </div>
//     }
// }