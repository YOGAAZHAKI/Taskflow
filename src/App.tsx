import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import FilterTabs from "./components/FilterTabs";
import type { Task,TaskFilter } from "./types/task";
import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";
function App(){
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
  const[filter,setFilter]=useLocalStorage<TaskFilter>("filter", "all");
  function handleAddTask(task: Task) {
    setTasks((previousTasks) => [...previousTasks, task]);
  }
  function getFilteredTasks(tasks: Task[], filter: TaskFilter): Task[] {
    if (filter === "active") {
        return tasks.filter((task) => task.status === "active");
    }

    if (filter === "completed") {
        return tasks.filter((task) => task.status === "completed");
    }

    return tasks;
  }
  const filteredTasks = getFilteredTasks(tasks, filter);
  function handleToggleTask(id: number) {
    setTasks((previousTasks) =>
        previousTasks.map((task) =>
            task.id === id
                ? {
                    ...task,
                    status: task.status === "active"
                        ? "completed"
                        : "active"
                }
                : task
          )
      );
  }
  function handleDeleteTask(id: number) {
    setTasks((previousTasks) =>
        previousTasks.filter((task) => task.id !== id)
    );
  }
    return (
    <div className="app">
        <h1 className="app-title">TaskFlow</h1>
        <p className="app-subtitle">
            Stay organized. Get things done.
        </p>

        <TaskForm onAddTask={handleAddTask} />

        <FilterTabs
            filter={filter}
            onFilterChange={setFilter}
        />

        <div className="task-list">
            {filteredTasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggleTask={handleToggleTask}
                    onDeleteTask={handleDeleteTask}
                />
            ))}
        </div>
    </div>
    );
  }

export default App;
