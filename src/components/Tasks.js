import Task from "./Task";

const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            text={task.text}
            day={task.day}
            onDelete={onDelete}
          />
        );
      })}
    </>
  );
};

export default Tasks;
