import React from 'react';
import MyNavbar from './myNavbar.js';
import {Card, CardBody, CardTitle, CardText, Row, Col, Jumbotron, Button} from 'reactstrap';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
   
 }

  render() {
    return (
      <div>
        <MyNavbar />
        
      <Jumbotron className="jumbotron">
        <h1 className="display-3">Guardian Angels</h1>
        <br></br>
        <p className="lead">Committed to providing a smooth and seamless experience for homeless shelters and those they serve.</p>
        <hr className="my-3 text-info" />
        <br></br>
        <p className="display-5">Are you affiliated with a shelter? <a href="/signup">Sign up</a> or <a href="/login">login</a> today!</p>
        <p>Interested in donating? Make your <a href='/all'>pledge</a> today!</p>
        <br></br>
        <p className="lead">
          <Button color="primary"><a href="about">About Us</a></Button>
        </p>
      </Jumbotron>
    </div>
   );
  }
};
  
export default App;
