import React from 'react';
import PropTypes from 'prop-types';
import { Tasks } from '../Tasks/Tasks';

export const Note = ({ tasks, text }) => {
  return (
    <div className="ui card">
      <div className="content">
        <div className="description">
          <p>{text}</p>

          {!!tasks.length && (
            <Tasks tasks={tasks} />
          )}
        </div>
      </div>
    </div>
  );
};

Note.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  })),
  text: PropTypes.string,
};
