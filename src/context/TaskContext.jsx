import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks.js";
export const TaskContext = createContext();

export function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}
