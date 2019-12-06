import React from 'react';
import PropTypes from 'prop-types';

import Tasks from './Tasks';

const Note = ({ text, tasks = [] }) => (
  <div className="ui card">
    <div className="ui content">
      <div className="ui description">
        <p>{text}</p>
        <Tasks tasks={tasks} />
      </div>
    </div>
  </div>
);

Note.propTypes = {
  text: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Note;
