import React, { useState } from 'react';

const CreateCategory = () => {
  const [categoryName, setCategoryName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const token = localStorage.getItem('authToken'); // Retrieve the token from storage

  const handleCategoryCreation = async (e) => {
    e.preventDefault();

    if (!token) {
      setError('Please login to create a category');
      return;
    }

    try {
      const response = await fetch('https://your-api.com/create-category', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Attach token in Authorization header
        },
        body: JSON.stringify({ name: categoryName }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Category created successfully!');
        setCategoryName(''); // Clear the input field
      } else {
        setError(data.message || 'Category creation failed');
      }
    } catch (err) {
      setError('Something went wrong');
    }
  };

  return (
    <div>
      <form onSubmit={handleCategoryCreation}>
        <input 
          type="text" 
          placeholder="Category Name" 
          value={categoryName} 
          onChange={(e) => setCategoryName(e.target.value)} 
        />
        <button type="submit">Create Category</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default CreateCategory;
