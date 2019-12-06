import React from 'react';
import PropTypes from 'prop-types';

const Tasks = ({ tasks }) => {
  if (tasks.length === 0) {
    return <b>No tasks</b>;
  }

  return (
    <ul className="ui list">
      {tasks.map(task => (
        <li key={task.id}>
          {task.name}
        </li>
      ))}
    </ul>
  );
};

Tasks.propTypes = {
  // eslint-disable-next-line react/object-curly-newline
  tasks: PropTypes.arrayOf(PropTypes.object),
};

Tasks.defaultProps = { tasks: [] };

export default Tasks;
