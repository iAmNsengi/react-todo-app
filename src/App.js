import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "./index.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor appointment",
      day: "Feb 5th 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Feb 6th 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food shopping",
      day: "Feb 5th 2:30pm",
      reminder: false,
    },
  ]);

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        <h2>No tasks to display</h2>
      )}
    </div>
  );
}

export default App;
