import React from 'react';

import axios from 'axios';
import MyNavbar from './myNavbar.js';



class App extends React.Component {
  constructor() {
    super();
   
    const pubRoot = new axios.create({
      baseURL: "http://localhost:3000/account"
    });
    /*pubRoot.post('/create/', {
      "name": "booty",
      "pass": "pass123",
      "data": {
        "phone": "phoneNum",
        "address": "123 Durham"
      }
    }).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });*/
 }

  render() {
    return (<MyNavbar></MyNavbar>);
  }
};
  
export default App;
