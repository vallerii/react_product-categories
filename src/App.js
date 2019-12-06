import React from 'react';
import './App.scss';
import Note from './components/Note';
import { tasks } from './api/tasks';
import { notes } from './api/notes';

const preparedNotes = notes.map((note) => {
  const getTaskById = taskId => tasks.find(task => task.id === taskId);

  return {
    ...note,
    tasks: note.tasks.map(getTaskById),
  };
});

function App() {
  return (
    <div className="container">
      {preparedNotes.map(note => (
        <Note {...note} key={note.id} />
      ))}
    </div>
  );
}

export default App;
