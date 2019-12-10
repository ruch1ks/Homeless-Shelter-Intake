import React from 'react';
import MyNavbar from './myNavbar.js';
import {Card, CardBody, CardTitle, CardText} from 'reactstrap';
import './About.css';

function About() {
    return (
      <div>
        <MyNavbar />
        <Card className="about">
          <CardBody>
            <CardTitle><h3>About Us</h3></CardTitle>
            <CardText>
              <h5>
                Our mission is to provide homeless shelters with a more seamless intake process and the ability to easily 
                articulate which donations are most needed at any given time.
              </h5>
              <p>
                Currently, the majority of homeless shelter intake processes are done on paper. Furthermore, individuals check into 
                shelters without a chance to articulate what items they need the most at that particular moment. Guardian Angels hopes to 
                address both of these issues. <a href="/signup">Register</a> to become an affiliated shelter today and unlock features to 
                check in individuals electronically, eliminating the potential for lost paper records. 
              </p>
              <p>
                During intake, an individual checking in can specify which items they most urgently need
                upon check-in. We compile the data across all the individuals staying in your shelter, and 
                make real-time calculations to determine the items which are most needed across your shelter as a whole. 
              </p>
              <p>
                All affiliated shelters will also be able to make announcements and posts on a private feed
                accessible only to other shelters registered with Guardian Angels. 
              </p>
            </CardText>
          </CardBody>
        </Card>    
        <Card className="about">
          <CardBody>
            <CardText>
              <p>
                Not affiliated with a shelter? Still want to contribute? <a href='./all'>Pledge</a> a donation to your favorite shelter! 
              </p>
            </CardText>
          </CardBody>
        </Card>    
      </div>
        
    );
}

export default About;