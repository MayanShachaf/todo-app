const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000; // Backend runs on port 5000

app.use(cors()); // Allow requests from your frontend
app.use(bodyParser.json()); // Parse JSON request bodies

// Temporary in-memory storage
let tasks = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
  });
  
app.post('/tasks', (req, res) => {
    const newTask = req.body; // Task sent from frontend
    tasks.push(newTask);
    res.json({ message: 'Task added', task: newTask });
  });
  app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id); // Get task ID from the request
    tasks = tasks.filter((task) => task.key !== taskId);
    res.json({ message: 'Task deleted', id: taskId });
  });
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });