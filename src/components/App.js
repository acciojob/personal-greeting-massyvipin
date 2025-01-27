import React from 'react';
import { useState } from "react";
import './../styles/App.css';

const Greeting = () => {
  // Initialize states for name input and greeting message
  const [Name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  // Handle input change
  const handleChange = (event) => {
    setName(event.target.value);
  };

  // Handle submit button click
  const handleSubmit = () => {
    if (Name.trim() === '') {
      setGreeting('Please enter your name.');
    } else {
      setGreeting(`Hello, ${Name}!`);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={Name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>{greeting}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Greeting />
    </div>
  );
};

export default App;
