import React, { useState, useEffect } from "react";
import axios from "axios";

const DataPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Ensure the URL is correct based on your db.json structure
    axios
      .get("http://localhost:5000/Mydata") // Ensure this matches your db.json key
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch data.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>My Data</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataPage;
