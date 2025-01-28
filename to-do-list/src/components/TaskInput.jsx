import { useState } from 'react';
import PropTypes from 'prop-types';

function TaskInput({ addTask }) {
  const [taskTitle, setTaskTitle] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask({ title: taskTitle });
      setTaskTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Enter a task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
TaskInput.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default TaskInput;
