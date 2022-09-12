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
            todos: [...state.todos, state.newTodo],
            newTodo: ''
    }))

    handleResetButton = () =>
        this.setState ({
            todos: []
        })

    handleRemoveButton  = (e) => {
        this.setState((state) => {
        const tasks = [...state.todos]
        const value = e.target.value
        tasks.splice(value, 1)
            
        return {todos: tasks}
        })
    }

    render() {
        return <div>
            <h3>To do:</h3>
            <ul>{this.state.todos.map((todo, index) => (
            <li key={index}>{todo} <button value={index} onClick={this.handleRemoveButton}>Remove</button></li>
            ))}</ul>
            <input name="newTodo" value={this.state.newTodo} onChange={this.handleNewTodo}></input>
            <button onClick={this.addToList}>Add task</button>
            <button onClick={this.handleResetButton}>Reset</button>
        </div>
    }
}
