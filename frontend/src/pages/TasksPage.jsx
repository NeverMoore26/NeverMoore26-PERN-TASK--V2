import { useEffect } from "react";
import TaskCard from "../components/tasks/TaskCard";
import { useTasks } from "../context/TaskContext";

function TasksPage() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  if (tasks.length === 0) return (
    <div className="flex justify-center items-center h-[calc(100vh-10rem)]">
      <h1 className="text-3xl font-bold">No tasks found</h1>
    </div>
  );

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {tasks.map((task) => (
        <div 
          key={task.id}
          className="transform transition duration-300 hover:scale-105 hover:shadow-lg"
        >
          <TaskCard task={task} />
        </div>
      ))}
    </div>
  );
}

export default TasksPage;
