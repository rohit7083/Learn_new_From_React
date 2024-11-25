import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

function SimpleForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors , isSubmitting},
      } = useForm();


      async function onSubmit(data){
        await new Promise((resolve)=>setTimeout(resolve,2000));
        console.log("Submitted for data ", data );
        
      }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label htmlFor="">name: </label> 
      <input defaultValue="Manas" {...register("name",{ minLength:3})} /> <br />

      {/* include validation with required or other standard HTML validation rules */}
      <label htmlFor="">City: </label>
      <input {...register("city", {
         required: true, 
         maxLength: {value:5,message:'max len atleast 3'},

         }) } />
         {errors.city &&  <p className='text-red-700'>{errors.city.message}</p>}
          <br />
      {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <span>This field is required</span>} */}

      <input type="submit"
      className='bg-slate-600'
       disabled={isSubmitting}
        value={isSubmitting ? "Submtting...":"submit"} />
    </form>
    </>
  )
}

export default SimpleForm