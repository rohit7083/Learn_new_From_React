import React from "react";
import { useState } from "react";
function Test() {
  const [data, setdata] = useState([]);
  const [newdata, setnewdata] = useState("");
  const [searchQ ,setSearchQ]=useState("");
const [editIndex , setEditIndex]=useState(null)
  const handleAdd = () => {
    if (newdata.trim()!=="") {
    setdata([...data, newdata]);
    setnewdata("");
  };}

  const handleEdit=(index)=>{
    setnewdata(data[index]);
    setEditIndex(index);
  }
  
  const handleSaveEdit=()=>{
    if (newdata.trim()!=="") {
      const updateData=data.map((fdata,index)=>
        // console.log(updateData)
        
      index ===editIndex ? newdata :fdata
      )
      setdata(updateData);
    setnewdata("");
    setEditIndex("");
    }
  }

  const handleDelete=(index)=>{
    const updateDelete=data.filter((_,i)=>i !== index)
    setdata(updateDelete);

  }

  const filteredTasks = data.filter((fdata) =>
    fdata.toLowerCase().includes(searchQ.toLowerCase())
  );
  return (
    <>
 <div className="min-h-screen  bg-gray-100 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 w-96">
          <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>
        <h1 className="mt-5 text-2xl text-center">Todo Project For Practice</h1>
        <br />
        <div className="text-center mb-2">
          <input
            type="search"
            placeholder="Search Anything"
            value={searchQ}
            onChange={(e)=>setSearchQ(e.target.value)}
            className=" rounded-md border text-xl p-2"
          />
        <div className="text-center">
          <input
            type="text"
            value={newdata}
            onChange={(e) => setnewdata(e.target.value)}
            placeholder="Enter Text"
            className="rounded-md border text-xl p-2"
          />
          <button
            type="submit"
           onClick={editIndex === null ? handleAdd : handleSaveEdit}
            className="border text-xl rounded-md p-2 ml-2 bg-green-400 text-black"
          >
        { editIndex === null ?  " Add +":"Update"}
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center min-h-screen">
          <ul>

            {filteredTasks.map((fdata, index) => (
                      <div className="bg-red-300 p-3 m-5  rounded-md border">

              <li key={index}>
                <h1>{fdata}</h1>
                <div className="flex gap-2 justify-end">

                <button onClick={()=>handleEdit(index)} className="bg-orange-400 border p-2 rounded-sm text-black ">
                  edit
                </button>
                <br />
                <button onClick={()=> handleDelete(index)} className="bg-red-400 border p-2 rounded-sm text-black ">
                  delete
                </button>
                <br />
                <button className="bg-green-400 border p-2 rounded-sm text-black ">
                  view
                </button>
                </div>
              </li>
              </div>

            ))}
          </ul>
            </div>
      </div>
      </div>

    </>
  );
}

export default Test;
