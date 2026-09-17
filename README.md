# TaskFlow

A simple and modern task management application built with React and TypeScript.

TaskFlow helps users create, organize, filter, update, and delete tasks while keeping them persistent using browser localStorage.

## Features

- Create tasks with title, category, and status
- Categorize tasks as Work, Personal, or Learning
- Set task status as Active or Completed
- Filter tasks by All, Active, and Completed
- Toggle task status by clicking the task title
- Delete tasks
- Persist tasks using browser localStorage
- Data remains available after refreshing the browser
- Clean and responsive user interface
- Type-safe development using TypeScript
- Immutable state updates using functional programming concepts
- Custom generic `useLocalStorage` React hook

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- Browser localStorage

## Project Structure

```text
src/
├── components/
│   ├── FilterTabs.tsx
│   ├── TaskForm.tsx
│   └── TaskItem.tsx
├── hooks/
│   └── useLocalStorage.ts
├── types/
│   └── task.ts
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## Getting Started

### Prerequisites

Make sure the following are installed on your system:

- Node.js
- npm
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/YOGAAZHAKI/Taskflow.git
```

2. Navigate to the project directory:

```bash
cd Taskflow
```

3. Install the project dependencies:

```bash
npm install
```

### Run the Application

Start the development server:

```bash
npm run dev
```

The application will be available at the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

Open the URL in your browser to use TaskFlow.

## How It Works

### Task Creation

Users can create a task by providing:

- Task title
- Category
- Status

The task is added to the task list and stored in localStorage.

### Task Filtering

Tasks can be filtered using three options:

- All
- Active
- Completed

The filtering logic is implemented using a pure function and the `filter()` method.

### Task Status Toggle

Clicking on a task title toggles its status between:

```text
Active → Completed
Completed → Active
```

The task list is updated immutably using `map()`.

### Task Deletion

Users can delete a task using the Delete button.

The task is removed using the immutable `filter()` method.

### Persistent Storage

TaskFlow uses a custom `useLocalStorage` hook to store tasks in the browser's localStorage.

This allows tasks to remain available even after refreshing the browser.

## Future Improvements

Possible future enhancements include:

- Edit existing tasks
- Add due dates
- Add task priorities
- Search tasks
- Dark mode
- Backend integration
- User authentication
- Database storage

## Author

**Yogaazhaki S**

B.E. Computer Science and Engineering  
Artificial Intelligence & Machine Learning

## License

This project was created for learning and educational purposes.
