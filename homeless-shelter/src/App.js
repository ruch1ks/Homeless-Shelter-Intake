import React from 'react';

import MyNavbar from './myNavbar.js';
import {Card, CardBody, CardTitle, CardText, Row, Col} from 'reactstrap';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
   
 }

  render() {
    return (
      <div>
        <MyNavbar />
        <div id="home">
          <Card className="card">
            <CardBody>
              <CardTitle>
                <h3>Guardian Angels</h3>
              </CardTitle>
              <CardText>
                <p>Committed to providing a smooth and seamless experience for homeless shelters and those they serve</p>
              </CardText>
            </CardBody>
          </Card>
          <Row>
            <Col sm={6}>
              <Card className="card">
                <CardBody>
                  <CardTitle><h4>Are you affiliated with a shelter?</h4></CardTitle>
                  <CardText><p><a href="/signup">Sign up</a> or <a href="/login">login</a> today!</p></CardText>
                </CardBody>
              </Card >
            </Col>
            <Col sm={6}>
              <Card className="card">
                <CardBody>
                <CardTitle><h4>Interested in donating?</h4></CardTitle>
                <CardText><p>Make your <a href='/all'>pledge</a> today!</p></CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>);
  }
};
  
export default App;
