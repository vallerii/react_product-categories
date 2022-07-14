import React from 'react';
import './App.scss';

// import usersFromServer from './api/users';
// import productsFromServer from './api/products';
// import categoriesFromServer from './api/categories';

export const App: React.FC = () => (
  <div className="container">
    <div className="ui card">
      <div className="ui content">
        <div className="ui description">
          <p>Always - (Roma)</p>
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
          <p>Never - (Anna)</p>
          <b>No tasks</b>
        </div>
      </div>
    </div>
  </div>
);
