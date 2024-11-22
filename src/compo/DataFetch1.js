import { useState, useEffect } from 'react';

const DataFetch1 = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Store data in state
        setLoading(false); // Set loading state to false
      })
      .catch((error) => {
        setError(error); // Handle errors
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            Name:{product.title} <br/> <hr/>
            BODY:{product.body}
            </li>
            
        ))}
      </ul>
    </div>
  );
};

export default DataFetch1;
