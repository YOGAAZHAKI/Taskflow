export type TaskCategory = "work" | "personal" | "learning";
export type TaskStatus = "active" | "completed";
export type TaskFilter = "all" | "active" | "completed";
export type Task = {
    id: number;
    title: string;
    category: TaskCategory;
    status: TaskStatus;
};
