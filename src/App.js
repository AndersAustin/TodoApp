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
    this.setState({
      inputText: e.target.value
    })
  }

  handleInputClick (e) {
    const list = this.state.todos.concat([this.state.inputText]);
    this.setState({
      todos: list
    })
  }

  handleDelete (e) {
    const index = this.state.todos.indexOf(e.target.value);
    this.state.todos.splice(index, 1);
    const array = this.state.todos;
    this.setState({
      todos: array
    })
  }

  handlePriority (e) {
    this.setState ({
      prio: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>WE MAKIN A LIST, BITCH</h1>
        <h2>WE CHECKIN IT TWICE, HO</h2>
        <Input onChange={this.handleChanges.bind(this)} onClick={this.handleInputClick.bind(this)}/>
        <h2> Priority </h2>
        <Priority prio={this.state.prio}/>
        <h2> List </h2>
        <List list={this.state.todos} setPrio={this.handlePriority.bind(this)} doDelete={this.handleDelete.bind(this)}/>
      </div>
    );
  }
}

export default App;
