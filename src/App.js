import React, { Component } from 'react';
import './styles/App.css';
import Priority from './components/PriorityItem.js';
import List from './components/todoList';
import Input from './components/input.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      prio: '',
      inputText: ''
    }
  }

  handleChanges (e) {
    e.preventDefault()
    this.setState({
      inputText: e.target.value
    })
  }

  handleInputClick (e) {
    e.preventDefault()
    const list = this.state.todos.concat([this.state.inputText]);
    this.setState({
      todos: list
    })
  }

  handleDelete (e) {
    e.preventDefault()
    const index = this.state.todos.indexOf(e.target.value);
    this.state.todos.splice(index, 1);
    const array = this.state.todos;
    this.setState({
      todos: array
    })
  }

  handlePriority (item) {
   // e.preventDefault()
   let i = this.state.todos.indexOf(item);
   this.state.todos.splice(i, 1);
   var tempArray = this.state.todos
   if (this.state.prio) {
     tempArray = this.state.todos.concat([this.state.prio]);
   } 
    const array = tempArray;

    this.setState ({
      prio: item,
      todos: array
    })
  }

  handleRemoveFromPrio () {
    var prioArray = this.state.todos.concat([this.state.prio]);
    this.setState ({
      prio : '',
      todos: prioArray
    })
  }

  render() {
    return (
      <div className="App">
        <h1>WE MAKIN A LIST</h1>
        <h2>WE CHECKIN IT TWICE</h2>
        <Input onChange={this.handleChanges.bind(this)} onClick={this.handleInputClick.bind(this)}/>
        <h2> Priority </h2>
        <Priority onRemove={this.handleRemoveFromPrio.bind(this)} prio={this.state.prio}/>
        <h2> List </h2>
        <List list={this.state.todos} setPrio={this.handlePriority.bind(this)} doDelete={this.handleDelete.bind(this)}/>
      </div>
    );
  }
}

export default App;
