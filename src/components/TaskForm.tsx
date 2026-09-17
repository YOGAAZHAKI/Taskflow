import { useState } from "react";
import type { Task,TaskCategory,TaskStatus } from "../types/task";

type TaskFormProps = {
    onAddTask: (task: Task) => void;
};

function TaskForm({ onAddTask }: TaskFormProps) {
    const[title,setTitle]=useState("");
    const [category, setCategory] = useState<TaskCategory>("work");
    const[status,setStatus]=useState<TaskStatus>("active");
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const newTask: Task = {
            id: Date.now(),
            title: title,
            category: category,
            status: status
        };

        onAddTask(newTask);
    }
    return (
        <form onSubmit={handleSubmit} className="task-form">
            <h2>Add Task</h2>
            <input
            className="task-input"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Enter task title"
        />
            <select
                className="task-select"
                value={category}
                onChange={(event) =>
                    setCategory(event.target.value as TaskCategory)
                }
            >
                <option value="work">Work</option>
                <option value="personal">Personal</option>
                <option value="learning">Learning</option>
            </select>
            <select
                className="task-select"
                value={status}
                onChange={(event) =>
                    setStatus(event.target.value as TaskStatus)
                }
            >
                <option value="active">Active</option>
                <option value="completed">Completed</option>
            </select>
            <button className="add-button"type="submit">Add Task</button>
        </form>
    );
}

export default TaskForm;