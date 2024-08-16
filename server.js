const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 5000;
const DB_PATH = path.join(__dirname, "db.json");

// Helper function to read the db.json file
const readTasks = () => {
  const data = fs.readFileSync(DB_PATH);
  return JSON.parse(data).tasks;
};

// Helper function to write to the db.json file
const writeTasks = (tasks) => {
  const data = JSON.stringify({ tasks }, null, 2);
  fs.writeFileSync(DB_PATH, data);
};

// Get all tasks
app.get("/tasks", (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});

// Add a new task
app.post("/tasks", (req, res) => {
  const tasks = readTasks();
  const newTask = {
    id: tasks.length + 1,
    ...req.body,
  };
  tasks.push(newTask);
  writeTasks(tasks);
  res.status(201).json(newTask);
});

// Delete a task
app.delete("/tasks/:id", (req, res) => {
  let tasks = readTasks();
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter((task) => task.id !== taskId);
  writeTasks(tasks);
  res.status(200).json({ message: "Task deleted successfully" });
});

// Toggle reminder
app.patch("/tasks/:id", (req, res) => {
  let tasks = readTasks();
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex] = {
      ...tasks[taskIndex],
      reminder: req.body.reminder,
    };
    writeTasks(tasks);
    res.status(200).json(tasks[taskIndex]);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
