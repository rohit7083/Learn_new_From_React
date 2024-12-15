// import React, { useContext, useState } from 'react';
// import { data } from 'react-router-dom';
// import FormContext from './Context/FormContext';

// const FormSample = () => {
//   const [formData2, setFormData2] = useState({
//     city: '',
//     state: '',
//     pincode: '',
//   });

//   const {setForm2}=useContext(FormContext)
 

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData2((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

  

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("data submitted :",formData2);

    
//   };


//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">React Form with Validation</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Name Input */}
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-gray-600">city</label>
//           <input
//             type="text"
//             id="city"
//             name="city"
//             value={formData2.city}
//             onChange={handleInputChange}
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//         </div>

//         {/* Email Input */}
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-600">state</label>
//           <input
//             type="text"
//             id="state"
//             name="state"
//             value={formData2.state}
//             onChange={handleInputChange}
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//         </div>

//         {/* Password Input */}
//         <div className="mb-4">
//           <label htmlFor="password" className="block text-gray-600">Pincode</label>
//           <input
//             type="number"
//             id="Pincode"
//             name="Pincode"
//             value={formData2.Pincode}
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




import React, { useContext } from "react";
import FormContext from "./Context/FormContext";

const FormSample2 = () => {
  const { form1Data } = useContext(FormContext);

  return (
    <div>
      <h2>Data from FormSample:</h2>
      <pre>{JSON.stringify(form1Data, null, 2)}</pre>
    </div>
  );
};

export default FormSample2;
