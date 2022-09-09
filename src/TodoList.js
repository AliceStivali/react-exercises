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
            todos: [...this.state.todos, state.newTodo],
            newTodo: ''
    }))

    handleResetButton = () =>
        this.setState ({
            todos: []
        })

    handleRemoveButton  = (e) => {
        const tasks = [...this.state.todos]
        const key = e.target.key
        tasks.splice(key, 1)
        this.setState ({
            todos: tasks
        })
    }

    render() {
        return <div>
            <h3>To do:</h3>
            <ul>{this.props.render(this.state, this.handleRemoveButton)}</ul>
            <input name="newTodo" value={this.state.newTodo} onChange={this.handleNewTodo}></input>
            <button onClick={this.addToList}>Add task</button>
            <button onClick={this.handleResetButton}>Reset</button>
        </div>
    }
}