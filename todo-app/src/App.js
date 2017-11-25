import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Task from './tasks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Task title="one" />
        <Task title="two" />
        <Task title="three" />
        <Task title="four" />
      </div>
    );
  }
}

export default App;
