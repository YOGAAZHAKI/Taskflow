import type { Task } from "../types/task";

type TaskItemProps = {
    task: Task;
    onToggleTask: (id: number) => void;
    onDeleteTask: (id: number) => void;
};

function TaskItem({ task, onToggleTask, onDeleteTask }: TaskItemProps) {
    return (
        <div className="task-card">
            <h3 
            className={task.status === "completed" ? "completed-task" : ""}
            onClick={() => onToggleTask(task.id)}>
                {task.title}
            </h3>

            <p className="task-category">
                Category: {task.category}</p>
            <p className="task-status">
                Status: {task.status}
            </p>
            <button className="delete-button" onClick={() => onDeleteTask(task.id)}>
                Delete
            </button>
        </div>
    );
}

export default TaskItem;