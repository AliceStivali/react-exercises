import React from "react";

export class TodoList extends React.Component {
    state = {
        newTodo: '',
        todos:['Buy milk', 'Water the plants', 'Do the dishes']
    }

    handleNewTodo = (event) => {
        const value = event.target.value

        this.setState ({
            newTodo: value
        })
    }

    addToList = () =>
        this.setState((state) => ({
            todos: [...this.state.todos, state.newTodo]
        }))

    render() {
        return <div>
            <h3>To do:</h3>
            <ul>{this.state.todos.map((todo, index) => (
            <li key={index}>{todo}</li>
            ))}</ul>
            <input name="newTodo" value={this.state.newTodo} onChange={this.handleNewTodo}></input>
            <button onClick={this.addToList}>Add task</button>
        </div>
    }
}