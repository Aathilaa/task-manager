import React, { useState } from "react";
import "../styles/AddTask.css";

const AddTask = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && dueDate) {
      addTask({ title, description, dueDate });
      setTitle("");
      setDescription("");
      setDueDate("");
    } else {
      alert("Please fill out all fields!");
    }
  };

  return (
    <div className="todo-app-container">
      <h2>Add Task</h2>
      <div className="add-task-section" onSubmit={handleSubmit}>
      <div className="input-group">
      <label htmlFor="title" style={{fontWeight: "bold" }}>Title:</label>
          <input
          id="title"
            type="text"
            placeholder="title"
            className="inputstyle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-group">
          
        <label htmlFor="description" style={{fontWeight: "bold" }}>Description:</label>
          <textarea
          id="description"
            type="text"
            style={{height:"19px"}}
            placeholder="description of task"
            className="inputstyle"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="input-group">
        <label htmlFor="description" style={{fontWeight: "bold" }}>Due:</label>
         <input
         id="due"
          type="date"
          className="inputstyle"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        </div>
        <button onClick={handleSubmit}>Add</button>
      </div>

     
    </div>
  );
};

export default AddTask;

