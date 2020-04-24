import React from 'react';

import './App.scss';

// import { tasks } from './api/tasks';
// import { notes } from './api/notes';

function App() {
  return (
    <div className="container">
      <div className="ui card">
        <div className="ui content">
          <div className="ui description">
            <p>Sunday</p>
            <ul className="ui list">
              <li>Banana</li>
              <li>Beer</li>
              <li>Cake</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ui card">
        <div className="ui content">
          <div className="ui description">
            <p>My day</p>
            <b>No tasks</b>
          </div>
        </div>
      </div>

      <div className="ui card">
        <div className="ui content">
          <div className="ui description">
            <p>Work</p>
            <ul className="ui list">
              <li>Sugar</li>
              <li>Coffee</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ui card">
        <div className="ui content">
          <div className="ui description">
            <p>Monday</p>
            <ul className="ui list">
              <li>Milk</li>
              <li>Bread</li>
              <li>Eggs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ui card">
        <div className="ui content">
          <div className="ui description">
            <p>Everyday</p>
            <ul className="ui list">
              <li>Cheese</li>
              <li>Sugar</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
