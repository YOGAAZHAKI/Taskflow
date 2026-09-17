# TaskFlow

A simple and modern task management application built with React and TypeScript.

## Features

- Create tasks with title, category, and status
- Filter tasks by All, Active, and Completed
- Toggle task status
- Delete tasks
- Persist tasks using browser localStorage
- Responsive and clean user interface
- Type-safe development with TypeScript
- Immutable state updates using functional programming concepts
- Custom generic `useLocalStorage` hook

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

## Project Structure

Clone the repository:

git clone <your-repository-url>

Navigate to the project:

cd taskflow

Install dependencies:

npm install

Run the development server:

npm run dev

Open the local URL shown in the terminal.

Concepts Applied

This project was developed as part of TypeScript and React learning, with practical application of:

Type aliases
Union types
Generics
React props
React state
Event handling
Array map() and filter()
Immutable state updates
Custom React hooks
Browser localStorage