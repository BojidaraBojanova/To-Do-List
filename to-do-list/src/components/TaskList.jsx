import Task from './Task';
import PropTypes from 'prop-types';

function TaskList({ tasks, toggleCompletion }) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} toggleCompletion={toggleCompletion} />
        ))}
      </ul>
    </div>
  );
}
TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      // add other task properties here
    })
  ).isRequired,
  toggleCompletion: PropTypes.func.isRequired,
};

export default TaskList;
