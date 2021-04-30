import React, { useState } from 'react';
import './App.css';
import Choices from './components/Choices';

function App() {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [userChoices, setUserChoices] = useState([]);

  const getMethods = () => {
    const methods = ['Object.assign()','Object.create()','Object.defineProperties()','Object.defineProperty()','Object.entries()',
    'Object.freeze()','Object.fromEntries()','Object.getOwnPropertyDescriptor()','Object.getOwnPropertyDescriptors()','Object.getOwnPropertyNames()',
    'Object.getOwnPropertySymbols()','Object.getPrototypeOf()','Object.prototype.hasOwnProperty()','Object.is()',
    'Object.isExtensible()','Object.isFrozen()','Object.prototype.isPrototypeOf()','Object.isSealed()','Object.keys()',
    'Object.preventExtensions()','Object.prototype.propertyIsEnumerable()','Object.seal()','Object.setPrototypeOf()',
    'Object.prototype.toLocaleString()','Object.prototype.toSource()','Object.prototype.toString()','Object.prototype.valueOf()',
    ]

    let choices = []
    for (let i = 0; i< 3; i++) {
      let choice = methods[Math.floor(Math.random() * methods.length)];
        while(choices.includes(choice)){
            choice = methods[Math.floor(Math.random() * methods.length)];
        }
        choices.push(choice);
  }
     return choices;
}


const handleClick = (e) => {
    const answers = [...userChoices];
    if(!answers.includes(e.target.innerText)) {
        answers.push(e.target.innerText);
        setUserChoices(answers);
        setScore(answers.length);
    } else {
        if(highScore<score) {
            setHighScore(score);
        }
        setUserChoices([]);
        setScore(0);
    }
}

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <h2>Stay DRY and don't click on the same method twice</h2>
      <div>Best Score: {highScore}</div>
      <br />
      <div>Score: {score}</div>
      <Choices choices={getMethods()} handleClick={handleClick} />
    </div>
  );
}

export default App;
