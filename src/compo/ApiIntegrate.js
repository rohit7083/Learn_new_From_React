// src/Form.js
import React, { useState } from 'react';

const ApiIntegrate = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [responseMessage, setResponseMessage] = useState('');


  const [loading, setLoading] = useState(false);

  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setResponseMessage('');

    const formData = {
      name: name,
      email: email,
    };

    // Dummy API endpoint (this could be replaced with your actual API endpoint)
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage('Form submitted successfully!');
      } else {
        setResponseMessage('Failed to submit form');
      }
    } catch (error) {
      setError('There was an error submitting the form.');
      console.error('Error:', error);
    } finally {
      setLoading(false);

    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-700">Sign Up Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-600">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-600">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 text-white font-semibold rounded-md ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {responseMessage && <div className="mt-4 text-center text-green-600">{responseMessage}</div>}
      {error && <div className="mt-4 text-center text-red-600">{error}</div>}
    </div>
  );
};

export default ApiIntegrate;
