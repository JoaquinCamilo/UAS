import React, { useState } from 'react';
import './App.css';

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState('');

  const handleCalculate = (operation) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult('Please enter valid numbers');
      return;
    }

    let res;
    try {
      switch (operation) {
        case 'add':
          res = add(number1, number2);
          break;
        case 'subtract':
          res = subtract(number1, number2);
          break;
        case 'multiply':
          res = multiply(number1, number2);
          break;
        case 'divide':
          res = divide(number1, number2);
          break;
        default:
          res = 'Unknown operation';
      }
    } catch (error) {
      res = error.message;
    }

    setResult(res);
    setOperation(operation);
  };

  return (
    <div className="app">
      <h1>Simple Calculator</h1>
      <div className="input-group">
        <input 
          type="number" 
          value={num1} 
          onChange={(e) => setNum1(e.target.value)} 
          placeholder="Enter first number"
        />
        <input 
          type="number" 
          value={num2} 
          onChange={(e) => setNum2(e.target.value)} 
          placeholder="Enter second number"
        />
      </div>
      <div className="button-group">
        <button onClick={() => handleCalculate('add')}>+</button>
        <button onClick={() => handleCalculate('subtract')}>-</button>
        <button onClick={() => handleCalculate('multiply')}>*</button>
        <button onClick={() => handleCalculate('divide')}>/</button>
      </div>
      {result !== null && (
        <div className="result">
          <p>The result of the {operation} operation is: {result}</p>
        </div>
      )}
    </div>
  );
};

export default App;
