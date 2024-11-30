import React, { useState } from 'react';

function MapDemo() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    
  });

  const [data, setData] = useState([]); // Array to hold the list of entries

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Add formData to data array
    setData((prevData) => [...prevData, formData]);

    // Clear the form
    setFormData({
      name: "",
      city: "",
    });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            name="name"
          />
          <br />
          <input
            type="text"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter city"
            name="city"
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div> 
      <div>
        <h1>All Data</h1>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <strong>Name:</strong> {item.name} | <strong>City:</strong> {item.city}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MapDemo;
