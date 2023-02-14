import React from "react"

class TodoItem extends React.Component{
    render(){
        return (
            <li className="todo-list-item">
                <input type="checkbox" name={this.props.name} className="todo-checkbox" />
                <label htmlFor={this.props.name} className="todo-checkbox-label" >{this.props.text}</label>
            </li>
        )
    }
}

export default TodoItem