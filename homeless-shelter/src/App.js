import React from 'react';

import MyNavbar from './myNavbar.js';



class App extends React.Component {
  constructor() {
    super();
   
 }

  render() {
    return (
      <div>
        <MyNavbar />
        <div>
          <h1>Guardian Angels</h1>
          <p></p>
        </div>
      </div>);
  }
};
  
export default App;
