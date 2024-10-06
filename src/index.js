import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaskList />
    <AddTask />
  </React.StrictMode>
);

reportWebVitals();
