import './Task.css';
import React, { useState} from 'react';
export default function Task({ id, val, deleteTask, playClapSound }) {
    const [isCompleted, setIsCompleted] = useState(false);
    const handleCheckboxChange = () => {
        // Toggle completion state
        if (!isCompleted) {
            playClapSound(); // Play sound only when marking as completed
          }
        setIsCompleted(!isCompleted);
        
      };
  return (
    <div className="task-container">
          <div className="task-content">
      <input type="checkbox" className="task-checkbox" checked={isCompleted} onChange={handleCheckboxChange} />
      <span> {val || "Default Task Text"}
      </span>
      </div>
      <button
        type="button"
        onClick={() => {
            deleteTask(id)
        }}
        className="delete"
      >
       delete
      </button>
    </div>
  );
}
