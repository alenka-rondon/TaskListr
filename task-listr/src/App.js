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
        <input className="task-text" type="text" value={this.state.text} onChange={(e) => {this.setState({text: e.target.value})}}></input>
      </div>
    );
  }
}

var i = 0;

class Tasks extends React.Component {
  constructor(props) {
    var prevTasks = [<Task key={i} text="dsa" />]
    if (localStorage.getItem('tasks')) {
      prevTasks = []
      var prevTexts = localStorage.getItem('tasks').split(',');
      for(i = 0; i < prevTexts.length; i++) {
        prevTasks.push(<Task key={i} text={prevTexts[i]} />);
        console.log(prevTasks);
      }
    }
    super(props);
    this.state = {
      tasks: prevTasks
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

  saveTasks = () => {
    var textBoxes = document.getElementsByClassName('task-text');
    var texts = [];
    for (i = 0; i < textBoxes.length; i++) {
      texts.push(textBoxes[i].value);
    }

    localStorage.setItem('tasksNum', texts.length);
    localStorage.setItem('tasks', texts);
  }

  componentDidMount() {
    window.addEventListener("beforeunload", this.saveTasks);
  }
  componentWillUnmount() {
    window.addEventListener("beforeunload", this.saveTasks);
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

class DateTime extends React.Component {
  constructor() {
    super();
    this.dateTime = new Date();
    this.state = {
      date: this.dateTime.toLocaleDateString(),
      time: this.dateTime.toLocaleTimeString()
    }
  }

  updateTime = () => {
    this.dateTime = new Date();
    this.setState({
      date: this.dateTime.toLocaleDateString(),
      time: this.dateTime.toLocaleTimeString()
    })
  }

  componentDidMount() {
    setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval();
  }

  render() {
    return(
      <p className='date-time'>{this.state.date} {this.state.time}</p>
    );
  }
}

var quotesDict = {
  1: "When you have a dream, you have got to grab it and never let go.",
  2: "We cannot solve problems with the kind 'of' thinking we employed when we came up with them.",
  3: "Nothing is impossible. The word itself says ‘I’m possible!'",
  4: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
  5: "It is better to fail in originality than to succeed in imitation.",
  6: "Experience is a hard teacher because she gives the test first, the lesson afterwards.",
  7: "I never dreamed about success. I worked for it.",
  8: "To know how much there is to know is the beginning of learning to live.",
  9: "Don’t let yesterday take up too much of today.",
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
        <div className='extra-stuff'>
          <DateTime />
          <div className = "Inspo">
            <p className='quote'> "{quote}" </p>
          </div>
        </div>
      </div>
      
    </body>
  );
}

export default App;