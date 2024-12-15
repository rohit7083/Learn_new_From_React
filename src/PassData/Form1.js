import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

export default function Form1() {
  const [form1data, setform1data] = useState({});
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate(); // Initialize navigate

  const onSubmit = (data) => {
    setform1data(data);
    // console.log(data); // Handle the form data
    navigate("/Form2"); // Navigate to a new page after submission
  };
  console.log("form1data", form1data);

  //   console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md"
    >
      {/* Input for example with Tailwind styling */}

      {/* City Input Field */}
      <div className="mb-4">
        <h1 className="bg-orange-100">Form1</h1>
        <label htmlFor="city" className="block text-gray-700">
          City
        </label>
        <input
          id="city"
          {...register("city", { required: true })}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
        />
        {errors.city && (
          <span className="text-red-500 text-sm">City is required</span>
        )}
      </div>

      {/* Pincode Input Field */}
      <div className="mb-4">
        <label htmlFor="pincode" className="block text-gray-700">
          Pincode
        </label>
        <input
          id="pincode"
          {...register("pincode", { required: true, pattern: /^[0-9]{6}$/ })}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
        />
        {errors.pincode && errors.pincode.type === "required" && (
          <span className="text-red-500 text-sm">Pincode is required</span>
        )}
        {errors.pincode && errors.pincode.type === "pattern" && (
          <span className="text-red-500 text-sm">Pincode must be 6 digits</span>
        )}
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}
