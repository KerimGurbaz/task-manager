import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserContext } from './context/UserContext';

const userValue = {
  // Your user object or any initial data
};

ReactDOM.render(
  <React.StrictMode>
    <UserContext.Provider value={userValue}>
      <App />
    </UserContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
