import React from 'react';
import './App.css';
import { notes } from './notes';
import { tasks } from './tasks';
import { Notes } from './components/Notes/Notes';

function App() {
  const tasksMap = tasks
    .reduce((acc, task) => ({ ...acc, [task.id]: task }), {});
  const notesWithTasks = notes.map(({ tasks: noteTasks, ...rest }) => {
    return {
      ...rest,
      tasks: noteTasks.map(taskId => tasksMap[taskId]),
    };
  });

  return (
    <div className="container">
      <Notes notes={notesWithTasks} />
    </div>
  );
}

export default App;
