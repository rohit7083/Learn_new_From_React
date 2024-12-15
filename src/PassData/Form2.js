import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form2() {
    const [Form2Data, setForm2Data] = useState({})
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    {
        // console.log(data);
        setForm2Data(data);
        console.log("form2data",Form2Data);
        
    }

//   console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md"
    >
      {/* Input for example with Tailwind styling */}
      <div className="mb-4">
      <h1 className="bg-orange-100">Form2</h1>

        <label htmlFor="example" className="block text-gray-700">
          Example Input
        </label>
        <input
          id="example"
          defaultValuse=""
          {...register("example")}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>

      {/* Required input field with Tailwind validation styling */}
      <div className="mb-4">
        <label htmlFor="exampleRequired" className="block text-gray-700">
          Required Input
        </label>
        <input
          id="exampleRequired"
          {...register("exampleRequired", { required: true })}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
        />
        {errors.exampleRequired && (
          <span className="text-red-500 text-sm">This field is required</span>
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
