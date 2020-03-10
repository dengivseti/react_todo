import React, { Component } from 'react'
import Todoitem from '../componets/TodoItem'
import AddTodo from '../componets/AddTodo'
import Loading from '../componets/Loading'

class TodoList extends Component {
    state = {
        loading: true,
        todos: [],
        currentItem: ''
    }

    toggleTodo(id) {
        const todos = [...this.state.todos]
        todos[id].completed = !todos[id].completed
        this.setState({
            todos
        })
    }

    onClose(id) {
        let todos = [...this.state.todos]
        todos = todos.filter(todo => todo.id !== id)
        this.setState({todos})
    }

    addTodo(event) {
        event.preventDefault()
        const currentItem = this.state.currentItem
        console.log(currentItem);
        const todos = [...this.state.todos]
        todos.push({
            id: Date.now(),
            completed: false,
            title: currentItem
        })
        this.setState({todos, currentItem: ''})
    }

    changeInput(value){
        this.setState({currentItem: value})

        
    }

    async componentDidMount() {
        try {
            const todos = await (await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')).json()
            this.setState({todos, loading: false})
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div className="container">
                <h1>Список задач</h1>
                <ul className="list-group">
                <AddTodo 
                    addTodo={(event) => this.addTodo(event)}
                    onChangeTodo={(value) => this.changeInput(value)}
                    currentItem={this.state.currentItem}
                />
                <hr/>
                {this.state.loading && <Loading />}
                {!this.state.todos.length && !this.state.loading && <p>Список пуст</p>}
                {this.state.todos.map((todo, index) => {
                    return <Todoitem 
                        key={todo.id} 
                        todo={todo} 
                        index={index} 
                        onToggle={() => this.toggleTodo(index)}
                        onClose = {() => this.onClose(todo.id)}
                    />
                })
                }
                </ul>
            </div>
        )
    }
}

export default TodoList