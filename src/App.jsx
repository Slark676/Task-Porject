import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaksForm.jsx";

export default function App() {
  return (
    <main className="bg-gray-900 text-white p-10 h-screen">
      <div className="container mx-auto">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}
