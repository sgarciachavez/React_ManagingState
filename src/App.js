import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let value1 = Math.floor(Math.random() * 100);
let value2 = Math.floor(Math.random() * 100);
let value3 = Math.floor(Math.random() * 100);
let proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
//const numQuestions = 0;
//const numCorrect = 0;

class App extends Component {
  state = {
  	numCorrect: 0, 
    numQuestions: 0
  }

  checkAnswer = (response) => {
    let result = value1 + value2 + value3 === proposedAnswer
    if(result === response){
    	//You are correct!!
      this.setState((currentState) => ({
    	numCorrect: currentState.numCorrect + 1
    	}))
    }
    
  	this.setState((currentState) => ({
    	numQuestions: currentState.numQuestions + 1
    }))
    
    value1 = Math.floor(Math.random() * 100);
	value2 = Math.floor(Math.random() * 100);
	value3 = Math.floor(Math.random() * 100);
	proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.checkAnswer(true)}>True</button>
          <button onClick={() => this.checkAnswer(false)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
