import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import logo from './TaskListr Logo.png';


class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text
    };
  }

  // changeText = () => {
  //   this.setState( (state, props) => ({text: document.getElementById("1").value}) );
  // }

  // deleteText = () => {
  //   this.setState( (state, props) => ({text: " "}) );
  //   // document.getElementById("1").value = "";
  // }

  render() {
    return (
      <div className="task">
        <input className="task-checkbox" type="checkbox"></input>
        <input className="task-text" type="text"></input>
        {/* <button onClick={this.deleteText}>Clear</button> */}
      </div>
    );
  }
}

var i = 0;

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [<Task key={i} text="" />]
    };
  }

  addTask = () => {
    i++;
    this.setState({tasks: this.state.tasks.concat([<Task key={i} text="" />])});
  }

  removeTask = () => {
    let tempArray = [...this.state.tasks];
    tempArray.pop();
    this.setState({tasks: tempArray});
  }

  render() {
    return (
      <div className = "TaskList">
       <h1>Tasks: </h1>
        {this.state.tasks}
        <div className = "changeRows">
        <button onClick={this.addTask}>+</button>
        <button onClick={this.removeTask}>-</button>
        </div>
      </div>
    );
  }
}

var buttonText = '☀️';

class DarkModeToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: '☀️'
    };
  }

  darkModeToggle = () => {
    var body = document.body;
    body.classList.toggle("dark-mode");

    console.log(this.state.buttonText);

    if (this.state.buttonText === '☀️') {
      this.setState({ buttonText: '🌙'});
    }
    else {
      this.setState({ buttonText: '☀️'});
    }
  }

  render() {
    return <button className="dark-mode-toggle" onClick={this.darkModeToggle}>{this.state.buttonText}</button>;
  }
}

function App() {
  return (
    <body> 
      <img src={logo} />
      <DarkModeToggle />

      <div className="App">
        
        <Tasks />
      </div>
    </body>
  );
}

export default App;