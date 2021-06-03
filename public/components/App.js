import React from 'react';
import AllUsers from './allUsers';
import AgeDemographic from './ageDemographic';
const App = () => {
  return (
    <div>
      <h1>All Users</h1>
      <p>Users and their age</p>
      <AllUsers />
      <h1>Age Demographic of Users With __</h1>
      <AgeDemographic />
    </div>
  );
};
export default App;
