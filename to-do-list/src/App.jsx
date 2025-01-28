import { useEffect, useState } from 'react'
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

import './index.css'

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if(savedTasks) {
      setTasks(savedTasks);
    }
  }, [])

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, { ...task, id: Date.now(), completed: false }]);
  };

  const toggleCompleted = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }
  
  return (
    <>
      <h1>Todo List</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} toggleCompleted={toggleCompleted} />
    </>
  )
}

export default App
