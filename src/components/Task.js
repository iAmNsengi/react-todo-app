import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ text, day, onDelete }) => {
  return (
    <div className="task">
      <h3>
        {text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={onDelete}
        />
      </h3>
      <p>{day}</p>
    </div>
  );
};

export default Task;
