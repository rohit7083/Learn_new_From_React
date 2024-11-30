import React, { useState } from 'react'

function Todo()
 { 
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
  
    const handleAddTask = () => {
      if (newTask.trim() !== "") {
        setTasks([...tasks, newTask]);
        setNewTask("");
      }
    };
  
    const handleDeleteTask = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    };
  
  return (
    <>
    
 
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
            className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-2 rounded-md shadow-sm"
            >
              <span>{task}</span>
              <button
                onClick={() => handleDeleteTask(index)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
 
    </>
  )
}

export default Todo