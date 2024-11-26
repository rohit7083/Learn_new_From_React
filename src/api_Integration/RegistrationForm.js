// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   let nevigate=useNavigate();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     // Clear previous error or success messages
//     setError(null);
//     setSuccess(null);
  
//     try {
//       setLoading(true);
  
//       // Send the formData to the API using POST
//       const response = await axios.post("https://jsonplaceholder.typicode.com/posts", formData);

  
//       // Handle success (e.g., show success message)
//       setSuccess("Registration successful!");
//       nevigate("/DataPage");
//       setFormData({ username: "", email: "", password: "" }); // clear form
//       console.log("Response:", response.data); // Log response for debugging
//     } catch (err) {
//       // Handle error
//       console.error("Error:", err);
//       setError("There was an error during registration. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };
  

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Username</label>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>
//         {loading ? (
//           <button
//             type="submit"
//             disabled
//             className="w-full p-3 mt-4 bg-gray-400 text-white rounded-md cursor-not-allowed"
//           >
//             Loading...
//           </button>
//         ) : (
//           <button
//             type="submit"
//             className="w-full p-3 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Register
//           </button>
//         )}
//       </form>

//       {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
//       {success && <p className="mt-4 text-green-500 text-center">{success}</p>}
//     </div>
//   );
// };

// export default RegistrationForm;




import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous error or success messages
    setError(null);
    setSuccess(null);

    try {
      setLoading(true);

      // Mock API request
      await axios.post("http://localhost:5000/mydata", formData);

      // Handle success
      setSuccess("Registration successful!");
      setFormData({ username: "", email: "", password: "" }); // clear form

      // Navigate to the new page after success
      setTimeout(() => navigate("/data"), 2000); // Optional: Delay for user to see the success message
    } catch (err) {
      setError("There was an error during registration. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        {loading ? (
          <button
            type="submit"
            disabled
            className="w-full p-3 mt-4 bg-gray-400 text-white rounded-md cursor-not-allowed"
          >
            Loading...
          </button>
        ) : (
          <button
            type="submit"
            className="w-full p-3 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        )}
      </form>

      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      {success && <p className="mt-4 text-green-500 text-center">{success}</p>}
    </div>
  );
};

export default RegistrationForm;
