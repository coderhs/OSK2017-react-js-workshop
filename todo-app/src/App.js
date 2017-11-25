import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Task from './tasks';
import Input from './input'

class App extends Component {
  constructor() {
    super();

    this.state = {
      TODOLIST: [{
        title: 'One',
        id: 'aa',
        completed: false
      },
      {
        title: 'Two',
        id: 'cc',
        completed: true
      }
      ]
    }
  }

  renderTasks() {
    return this.state.TODOLIST.map((tasks) => {
      return ( 
      <Task title={tasks.title} key={tasks.id} id={tasks.id} completed={tasks.completed}
       mark = { this.mark.bind(this) }/>
      )
    })
  }

  addTask(task) {
    let current = this.state.TODOLIST;
    current.push({
      id: Date.now(),
      title: task,
      completed: false
    });
    this.setState({TODOLIST: current})
  }

  mark(id) {
    let current = this.state.TODOLIST;
    var matching_last = current.find(function(list_tasks){
      return list_tasks.id === id
    });
    matching_last.completed = !(matching_last.completed)
    this.setState({
      TODOLIST: current
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Input addTask = { this.addTask.bind(this) }/>
        <ul>{ this.renderTasks() }</ul>
      </div>
    );
  }
}

export default App;
