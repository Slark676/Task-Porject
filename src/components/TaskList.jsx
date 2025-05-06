import TaskCard from "./TaskCard.jsx";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx";
function TaskList() {
  const { tasks, deleteTask } = useContext(TaskContext);
  if (tasks.length === 0) {
    return (
      <p className="text-white text-2xl font-bold text-center">
        No tasks available
      </p>
    );
  }

  return (
    <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
