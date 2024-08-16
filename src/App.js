import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "./index.css";
import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks, addTask, deleteTask, toggleReminder } from "./store.js";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasksFromServer();
      dispatch(fetchTasks(tasksFromServer));
    };
    getTasks();
  }, [dispatch]);

  const fetchTasksFromServer = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  const onAddTask = (task) => {
    dispatch(addTask(task));
  };

  const onDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const onToggleReminder = (id) => {
    dispatch(toggleReminder(id));
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
        title="Task Tracker"
      />
      {showAddTask && <AddTask onAdd={onAddTask} />}

      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={onDeleteTask}
          onToggle={onToggleReminder}
        />
      ) : (
        <h2>No tasks to display</h2>
      )}
    </div>
  );
}

export default App;
