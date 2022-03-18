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

var quotesDict = {
  1: "When you have a dream, you have got to grab it and never let go.",
  2: "We cannot solve problems with the kind 'of' thinking we employed when we came up with them.",
  3: "Nothing is impossible. The word itself says ‘I’m possible!'",
  4: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
  5: "It is better to fail in originality than to succeed in imitation",
  6: "Experience is a hard teacher because she gives the test first, the lesson afterwards.",
  7: "I never dreamed about success. I worked for it.",
  8: "To know how much there is to know is the beginning of learning to live.",
  9: "Don’t let yesterday take up too much of today",
  10: "You learn more from failure than from success. Don’t let it stop you. Failure builds character.",
};

var index = Math.floor(10 * Math.random()) + 1;
var quote = quotesDict[index];

function App() {
  return (
    <body> 
      <img src={logo} />
      <DarkModeToggle />

      <div className="App">
      <div className="check">
        <Tasks />
        </div>

        <div className = "Inspo">
          <p> {quote} </p>
        </div>

      </div>
      
    </body>
  );
}

export default App;