import { useState } from "react";
import "./TaskForm.css";

export default function TaskForm({ addNewToDo ,resetList}) {
  const [newToDo, setNewToDo] = useState("");

  return (
    <div className="task-form-container">
      <label className="task-form-label" htmlFor="new-todo-input">
        
      </label>
      <input
        id="new-todo-input"
        value={newToDo}
        onChange={(e) => setNewToDo(e.target.value)}
        placeholder="Enter a new task"
        className="task-form-input"
      />
      <button
        type="button"
        onClick={() => {
          if (newToDo.trim()) { // Validate input
            addNewToDo(newToDo);
            setNewToDo("");
          }
        }}
        className="task-form-button"
      >
        Add
      </button>
      
    </div>
  );
}
