import React from "react";
import logo from './logo.svg';
import TodoItem from "./Components/TodoItem";
import './App.css';

class App extends React.Component{

  constructor(){
    super() 
    this.state = {
      todos: [
        {id: 1, text: 'Sacar la basura'},
        {id: 2, text: 'Pasear el perro'},
        {id: 3, text: 'Cerrar las puertas'},
      ],
      newTodo: '',
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>TODO</h1>
          <ul>
            {this.state.todos.map((todo) => {
              return (
                <TodoItem key={todo.id} name={todo.id} text={todo.text}/>
              )
            })}
          </ul>
          <form onSubmit={this.handleSubmit}>
            <input 
              type="text"
              value={this.state.newTodo} 
              onChange={this.handleChange}
            />
            <button type="submit">Add TODO</button>
          </form>
        </header>
      </div>
    );
  }
  
  handleChange = (event) => {
    this.setState({newTodo: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState( prevState => ({
      todos: [...prevState.todos, {id: Date.now(), text: prevState.newTodo}],
      newTodo: '',
    }))
  }

}

export default App;
