import React, { useEffect, useState } from 'react'

function Test() {

    const[data,setData]=useState({
name:"",
city:"",
sal:"",
    })

   const handleSubmit =(e)=>{
    e.preventDefault();
    console.log("Form Submitted ",data)

   }
   
   const handleChange=(e)=>{
    const {name,value}=e.target;
    setData((prevData)=>({
        ...prevData,
        [name]:value,
    }))
   }
      
   
    
    
    return (
    <>
    <div className='justify-center items-center flex mt-10'>
 <form  action="" onSubmit={handleSubmit}>
    
    <h1>Form Validation</h1> <br />
    <input type="text" name='name' value={data.name}  onChange={handleChange} className='border p-1 m-3'  placeholder='enter U r Name' /> <br />
    <input type="text" name='city' value={data.city}   onChange={handleChange} className='border p-1 m-3'  placeholder='enter city'/><br />
    <input type="number" name='sal' value={data.sal}   onChange={handleChange} className='border p-1 m-3' placeholder='Enter salary'/><br />
    <button type="submit" className='border p-1 m-3 bg-red-400  '>Submit</button>

    </form>   
    </div>
    </>
  )
}

export default Test