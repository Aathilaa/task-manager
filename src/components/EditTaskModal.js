import React, { useState } from "react";
import "../styles/EditTaskModal.css";

const EditTaskModal = ({ isOpen, task, onSave, onClose }) => {
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleSave = () => {
    onSave(updatedTask);
  };

  return (
    isOpen && (
      <div className="edit-modal">
        <div className="edit-modal-content">
          <h2>Edit Task</h2>
          <input
            type="text"
            value={updatedTask.title}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, title: e.target.value })
            }
          />
          <br/> 
          <textarea
            value={updatedTask.description}
            style={{marginTop:"4px",height:"18px"}}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, description: e.target.value })
            }
          ></textarea><br></br>
          <input
            type="date"
            value={updatedTask.dueDate}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, dueDate: e.target.value })
            }
          />
          <div className="edit-modal-actions">
            <button onClick={handleSave}>Save</button>
            <button onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    )
  );
};

export default EditTaskModal;

