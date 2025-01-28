import PropTypes from 'prop-types';

function Task({ task, toggleCompletion }) {
    return (
      <li
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
        }}
      >
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleCompletion(task.id)}
        />
        {task.title}
      </li>
      );
  }
  
  Task.propTypes = {
    task: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
    toggleCompletion: PropTypes.func.isRequired,
  };
  
  export default Task;
    