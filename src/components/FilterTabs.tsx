import type { TaskFilter } from "../types/task";

type FilterTabsProps = {
    filter: TaskFilter;
    onFilterChange: (filter: TaskFilter) => void;
};
function FilterTabs({ filter, onFilterChange }: FilterTabsProps) {
    return (
    <div className="filter-tabs">
        <button className={filter === "all" ? "filter-button active" : "filter-button"} onClick={() => onFilterChange("all")}>
            All
        </button>

        <button className={filter === "active" ? "filter-button active" : "filter-button"} onClick={() => onFilterChange("active")}>
            Active
        </button>

        <button className={filter === "completed" ? "filter-button active" : "filter-button"} onClick={() => onFilterChange("completed")}>
            Completed
        </button>
    </div>
);
}export default FilterTabs;