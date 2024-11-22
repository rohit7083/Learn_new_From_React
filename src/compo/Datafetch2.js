import { useState, useEffect } from 'react';
import axios from 'axios';

const Datafetch2 = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
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
          <li  key={product.id}>

            <span className='text-green-600'>Name:</span>{product.title} <br/> <hr/>
            <span className='text-blue-600'>Body:</span>{product.body}
            </li>
            
        ))}
      </ul>
    </div>
  );
};

export default Datafetch2;
