import Task from './Task.js';
import './TaskList.css'; // Import the CSS file

export default function TaskList({ MyList,deleteTask,playClapSound }) {
  return (
    
      <ul className="task-list">
        {MyList.map((item) => (
          <li key={item.key} className="task-list-item">
            <Task id={item.key} val={item.val} deleteTask={deleteTask} playClapSound={playClapSound}/>
          </li>
        ))}
      </ul>
   
  );
}
