import React, { useState, useEffect } from 'react';

function LocalStorageDemo() {
  // State to store the user's name
  const [name, setName] = useState('');

  // When the component mounts, check if there's a name in localStorage
  useEffect(() => {
    const storedName = localStorage.getItem('name');    
    if (storedName) {
      setName(storedName); // Set the stored name to state if available
    }
  }, []);

  // Handle input change and update both state and localStorage
  const handleChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    localStorage.setItem('name', newName); // Store the name in localStorage
  };

  return (
    <div>
      <h1>Hello, {name ? name : 'Guest'}!</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
    </div>
  );
}

export default LocalStorageDemo;
