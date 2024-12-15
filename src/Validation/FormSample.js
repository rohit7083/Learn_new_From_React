// import React, { useContext, useState } from 'react';
// import { data, useNavigate } from 'react-router-dom';
// import FormSample2 from './FormSample2'
// import FormContext from './Context/FormContext';
// const {setForm1}=useContext(FormContext);
// const FormSample = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });
//   let navigate=useNavigate();


//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

  

//   const handleSubmit = (e) => {
//     e.preventDefault();
// setForm1({...formData})
//     console.log("data submitted :",formData);

//     navigate('/formsample2'); // Use the path defined in your routes
//   };


//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">React Form with Validation</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Name Input */}
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-gray-600">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//         </div>

//         {/* Email Input */}
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-600">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//         </div>

//         {/* Password Input */}
//         <div className="mb-4">
//           <label htmlFor="password" className="block text-gray-600">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FormSample;



import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormContext from "./Context/FormContext";

const FormSample = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { setForm1Data } = useContext(FormContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm1Data(formData);
    console.log("Data submitted:", formData);
    navigate("/formsample2");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormSample;
