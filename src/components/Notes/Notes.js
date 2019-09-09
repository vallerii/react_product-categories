import React from 'react';
import PropTypes from 'prop-types';
import { Note } from '../Note/Note';

export const Notes = ({ notes }) => {
  return notes.map(note => (
    <Note key={note.id} {...note} />
  ));
};

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    tasks: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    })),
    text: PropTypes.string,
    id: PropTypes.string,
  })),
};
