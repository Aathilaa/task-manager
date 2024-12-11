import React from "react";
import "../styles/TaskList.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <div className="task-list-container">
      {tasks.map((task, index) => (
        <div key={index} className="task-item">
          <div className="task-details">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due: {task.dueDate}</p>
          </div>
          <div className="task-actions">
          <FaEdit className="icon" onClick={() => onEdit(index)} />
          <FaTrashAlt className="icon" onClick={() => onDelete(index)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;

