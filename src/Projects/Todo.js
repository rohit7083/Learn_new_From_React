// import React, { useState } from "react";

// function Todo() {
//   const [tasks, setTasks] = useState([]); // Holds the list of tasks
//   const [newTask, setNewTask] = useState(""); // Holds the current task input
//   const [editIndex, setEditIndex] = useState(null); // Tracks which task is being edited

//   // Add a new task
//   const handleAddTask = () => {
//     if (newTask.trim() !== "") {
//       // Prevent empty tasks
//       setTasks([...tasks, newTask]); // Add the new task to the tasks array
//       setNewTask(""); // Clear the input field
//     }
//   };

//   const handleDeleteTask = (index) => {
//     const updatedTasks = tasks.filter((_, i) => i !== index);  // Exclude the task at the clicked index
//     setTasks(updatedTasks);  // Update the tasks array
//   };
  

//   // Edit a task
//   const handleEdit = (index) => {
//     setNewTask(tasks[index]);  // Pre-fill the input field with the task to edit
//     setEditIndex(index);  // Store the index of the task being edited
//   };
  

//   // Save the edited task
//   const handleSaveEdit = () => {
//     if (newTask.trim() !== "") {
//       const updatedTasks = tasks.map((task, index) =>
//         index === editIndex ? newTask : task  // Replace the edited task
//       );
//       setTasks(updatedTasks);  // Update the tasks array
//       setNewTask("");  // Clear the input field
//       setEditIndex(null);  // Reset edit mode
//     }
//   };
  

//   return (
//     <>
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//         <div className="bg-white shadow-lg rounded-lg p-6 w-96">
//           <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>
//           <div className="flex gap-2 mb-4">
//             <input
//               type="text"
//               value={newTask}
//               onChange={(e) => setNewTask(e.target.value)}
//               placeholder={editIndex !== null ? "Edit task" : "Add a new task"}
//               className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <button
//               onClick={editIndex !== null ? handleSaveEdit : handleAddTask}
//               className={`px-4 py-2 rounded-md text-white ${
//                 editIndex !== null
//                   ? "bg-green-500 hover:bg-green-600"
//                   : "bg-blue-500 hover:bg-blue-800"
//               }`}
//             >
//               {editIndex !== null ? "Save" : "Add"}
//             </button>
//           </div>
//           <ul className="space-y-2">
//             {tasks.map((task, index) => (
//               <li
//                 key={index}
//                 className="flex justify-between items-center bg-gray-100 p-2 rounded-md shadow-sm"
//               >
//                 <span>{task}</span>
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => handleEdit(index)}
//                     className="bg-orange-500 text-white px-3 py-1 rounded-md hover:bg-orange-600"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDeleteTask(index)}
//                     className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>

//   );
// }

// export default Todo;

import React, { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([]); // Holds the list of tasks
  const [newTask, setNewTask] = useState(""); // Holds the current task input
  const [editIndex, setEditIndex] = useState(null); // Tracks which task is being edited
  const [viewTaskIndex, setViewTaskIndex] = useState(null); // Tracks the index of the currently viewed task
  const [searchQuery, setSearchQuery] = useState(""); // Holds the search query
  // Add a new task
  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]); // Add the new task to the tasks array
      setNewTask(""); // Clear the input field

    }
  };

  
  // Delete a task
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); // Exclude the task at the clicked index
    setTasks(updatedTasks); // Update the tasks array
    if (index === viewTaskIndex) setViewTaskIndex(null); // Clear the view if the displayed task is deleted
  };

  // Edit a task
  const handleEdit = (index) => {
    setNewTask(tasks[index]); // Pre-fill the input field with the task to edit
    setEditIndex(index); // Store the index of the task being edited
  };

  // Save the edited task
  const handleSaveEdit = () => {
    if (newTask.trim() !== "") {
      const updatedTasks = tasks.map((task, index) =>
        index === editIndex ? newTask : task // Replace the edited task
      );
      setTasks(updatedTasks); // Update the tasks array
      setNewTask(""); // Clear the input field
      setEditIndex(null); // Reset edit mode
    }
  };

  // View a task
  const handleView = (index) => {
    setViewTaskIndex(index); // Set the task to be viewed by index
  };

  // Dismiss the viewed task
  const handleDismiss = () => {
    setViewTaskIndex(null); // Clear the viewed task
  };

  // Filtered tasks based on search query
  const filteredTasks = tasks.filter((task) =>
    task.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 w-96">
          <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>

          {/* Search bar */}
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tasks"
              className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Add/Edit task input */}
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder={editIndex !== null ? "Edit task" : "Add a new task"}
              className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={editIndex !== null ? handleSaveEdit : handleAddTask}
              // onClick={handleAdd}
              className={`px-4 py-2 rounded-md text-white ${
                editIndex !== null
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-blue-500 hover:bg-blue-800"
              }`}
            >
              {editIndex !== null ? "Save" : "Add"}
            </button>
          </div>

          {/* Task list */}
          <ul className="space-y-2">
            {filteredTasks.map((task, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-2 rounded-md shadow-sm"
              >
                <span>{task}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-orange-500 text-white px-3 py-1 rounded-md hover:bg-orange-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleView(index)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleDeleteTask(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* View task details */}
          {viewTaskIndex !== null && (
            <div className="mt-6 p-4 bg-blue-100 rounded-lg shadow-lg">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Task Details</h2>
                <button
                  onClick={handleDismiss}
                  className="text-sm bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                >
                  Dismiss
                </button>
              </div>
              <p className="text-gray-700 mt-2">{tasks[viewTaskIndex]}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Todo;
