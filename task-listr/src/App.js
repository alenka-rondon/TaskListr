import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text
    };
  }

  changeText = () => {
    this.setState( (state, props) => ({text: document.getElementById("1").value}) );
  }

  deleteText = () => {
    this.setState( (state, props) => ({text: " "}) );
    // document.getElementById("1").value = "";
  }

  render() {
    return (
      <div className="task">
        <input type="checkbox"></input>
        <input id="1" type="text" value={this.state.text} onChange={this.changeText}></input>
        <button onClick={this.deleteText}>Clear</button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Task text="dasdas" />
      <Task text="" />
    </div>
  );
}

export default App;
