import logo from './logo.svg';
import './App.css';
import TaskForm from './components/TaskForm.js';
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import YogaIcon from './components/YogaIcon.js';
import axios from 'axios';
import { Lottie } from "lottie-react";
import { Howl } from 'howler';
function App() {
  
  const [MyList,setMyList] = useState([]);
  const [playAnimation, setPlayAnimation] = useState(false); // Animation state
  const clapSound = new Howl({
    src: [require('./clap.mp3')]
  });
  const playClapSound = () => {
    clapSound.play();
  };
    useEffect(() => {
      axios.get('http://localhost:5000/tasks')
        .then((response) => {
          setMyList(response.data);
        })
        .catch((error) => {
          console.error('Error fetching tasks:', error);
        });
    }, []);
  const addNewToDo = (newToDo) => {
      const newItem = { key: MyList.length, val: newToDo };
      axios.post('http://localhost:5000/tasks', newItem)
        .then((response) => {
          setMyList([...MyList, response.data.task]);
              // Trigger the animation
          setPlayAnimation(true);
          setTimeout(() => setPlayAnimation(false), 1800); // Stop animation after 2 seconds
        })
        .catch((error) => {
          console.error('Error adding task:', error);
        });
    };
    const deleteTask = (id) => {
      axios.delete(`http://localhost:5000/tasks/${id}`)
        .then(() => {
          setMyList(MyList.filter((task) => task.key !== id));
        })
        .catch((error) => {
          console.error('Error deleting task:', error);
        });
    };
  return (
    <div className="App">

      <div className="app-title gradient-title">
      My TODO List App
      </div>
      <div className="app-yoga-icon">
      {playAnimation && (
      <YogaIcon></YogaIcon>
      )}
      </div>
      
      <div className="task-list-form-container">
      <TaskForm addNewToDo = {addNewToDo} ></TaskForm>
     <TaskList MyList = {MyList} deleteTask={deleteTask} playClapSound={playClapSound}></TaskList>
     
    </div>
    
      
    </div>
    
    
  );
}

export default App;
