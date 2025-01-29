import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <label htmlFor="nameInput">Enter your name: </label>
      <input
        id="nameInput"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleInputChange}
      />
      {name.trim() && <h2>Hello {name.trim()}!</h2>}
    </div>
  );
};

export default App;
