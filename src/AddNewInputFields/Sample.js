// import { data } from "autoprefixer";
// import React, { useState } from "react";

// function Sample() {

// const [Mydata, setMydata] = useState({
//     fname:"",
//     lname:"",
//     bday:"",
//     gender:"",
//     prompt:"",
//     answer:""
// })

// const [PromptAdd, setPromptAdd] = useState([{
//     prompt:"",
//     answr:"",
//     timestamp:new Date().getTime();
// }])

// console.log(Mydata);


//   const handleInput = (e) => {
// const {name,value}=e.target;
// setMydata({
//     ...Mydata,
//     [name]:value

// })

//   };

//   return (
//     <>
//       <div>
//         <fieldset className="text-center">
//           <legend  className="text-xl">About You</legend>
//           <label htmlFor="" className="text-2xl p-2">Whats your Name</label>
//           <br />
//           <input
//             type="text"
//             name="fname"
//             placeholder="Enter First Name"
//             onChange={handleInput}
//           />{" "}
//           <br />
//           <input
//             type="text"
//             name="lname"
//             placeholder="Enter Last Name"
//             onChange={handleInput}
//           /> <br />
//           <label htmlFor=""  className=" p-2 text-2xl">Whats your Date OF birth</label>
//           <br />
//           <input
//             type="date"
//             name="bday"
//             min="2020-01-15"
//             placeholder="Enter date of birth"
//             onChange={handleInput}
//           />{" "}
//           <br />
//           <label htmlFor=""  className=" p-2 text-2xl">Whats your Gender</label>
//           <br />
//           <select name="gender" id=""             onChange={handleInput}
//           >
//             <option value="Gender">Gender</option>
//             <option value="male">Male</option>
//             <option value="female"> female</option>
//           </select>
//         </fieldset>


//         <fieldset className="text-center">
//         <label htmlFor=""  className=" p-2 text-2xl">Prompts</label>
//           <br />

//           {/* {PromptAdd.map((myprompt,i)=>( */}

         
//           <select key={myprompt.timestamp} name="prompt" id=""
//                    onChange={e => handlePrompt(e,i)}
// >
//             <option value="text1">What is u r favro</option>
//             <option value="text2">what is u r address</option>
//             <option value="text3"> how many u have salary </option>
//           </select> <br />
//         <textarea 
//         className="text-center"
//         onChange={e => handlePrompt(e,i)}
//         name="answer" 
//         rows={5}
//         placeholder="writer here whatever u want to write" id=""></textarea>
               
//                <br />
//                 <button type="submit" className="text-center border bg-orange-500">Add Prompt</button>
//          {/* ))} */}

//                 </fieldset>
//       </div>
//     </>
//   );
// }

// export default Sample;
