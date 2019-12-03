import React from 'react';
import MyNavbar from './myNavbar.js';
import {Card, CardBody, CardText, CardTitle, CardImg, Button} from 'reactstrap';
import './Dashboard.css';

class Dashboard extends React.Component {
    constructor() {
        super();

        this.state = {
            loggedIn : localStorage.getItem("jwt") == null ? true : false
        }
    }

    componentDidMount() {

    }

    render() {
        return(
            <div>
                <MyNavbar />
                {this.state.loggedIn ? <div id="notLoggedIn">
                    <Card id="emptyCard">
                        <CardBody>
                            <CardText><h3>You must be logged in to view your dashboard</h3></CardText>
                        </CardBody>
                    </Card>
                    <br />
                    <h5>Are you a registered shelter? <a href="../login">Log in</a> to view your dashboard</h5>
                    <h5>Not a registered shelter yet? <a href="../signup">Sign up</a> today!</h5>
                    </div> 
                    : 
                    <div id="dash">
                    <Card className="card">
                        <CardBody>
                            <CardImg></CardImg>
                            <CardTitle><h4>Name</h4></CardTitle>
                            <CardText>
                                <p>Address: </p>
                                <p>Phone Number: </p>
                                <p>About us: </p>
                            </CardText>
                        </CardBody>
                    </Card>
                    <Card className="card">
                        <CardBody>
                            <CardTitle><h4>Locate Us</h4></CardTitle>
                            <iframe width="525" height="300" frameborder="0"
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB_ZOlJblaoiNo202aVhKRaoy9uVduIdbA&q=Durham+Rescue+Mission,Durham+NC" allowfullscreen>>
                            </iframe>
                        </CardBody>
                    </Card>
                    <Card className="card">
                        <CardBody>
                            <CardTitle><h4>Number of Occupants</h4></CardTitle>
                            <CardText><Button>Register New Member</Button></CardText>
                        </CardBody>
                    </Card>
                    <Card className="card">
                        <CardBody>
                            <CardTitle><h4>Most Needed Donations</h4></CardTitle>
                            <CardText>Put donations here</CardText>
                        </CardBody>
                    </Card>
                    <Card className="card">
                        <CardBody>
                            <CardTitle><h4>Current Pledges</h4></CardTitle>
                            <CardText>Put pledges here</CardText>
                        </CardBody>
                    </Card>
                    </div>}
            </div>
        )
    }
}

export default Dashboard;