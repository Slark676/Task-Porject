import React from "react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-2xl font-bold mb-2 capitalize">{task.title}</h2>
      <p className="text-gray-300">{task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar Tarea
      </button>
    </div>
  );
}

export default TaskCard;
