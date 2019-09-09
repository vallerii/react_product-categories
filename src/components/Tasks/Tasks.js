import React from 'react';
import PropTypes from 'prop-types';

export const Tasks = ({ tasks }) => {
  return (
    <ul className="ui list">
      {tasks.map(({ name, id }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  })),
};
