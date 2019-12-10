import React from 'react';
import MyNavbar from './myNavbar.js';
import {Card, CardBody, CardText, CardTitle, CardImg, Button} from 'reactstrap';
import {getAccount} from './backend/accBackend.js';
import {calculateDonations} from './backend/userBackend.js';
import './Dashboard.css';

class Dashboard extends React.Component {
    constructor() {
        super();

        this.state = {
            loggedIn : localStorage.getItem("jwt") == null ? true : false,
            name : '',
            phone : '',
            address : '',
            description: '',
            donationsNeeded: []
        }
    }

    async componentDidMount() {
        if(localStorage.getItem("jwt") == null) return; 
        let response = await getAccount();

        let donations = [];
        let items = await calculateDonations();
        if(items != undefined) {
            for(let i = 0; i < items.length; i++) {
                donations.push(<li>{items[i]}</li>);
            }
        }

        if(donations.length == 0) {
            donations.push(<p>You have no members currently registered</p>);
        }

        this.setState({
            name: response.data.user.data.shelterName,
            phone: response.data.user.data.phone,
            address: response.data.user.data.address,
            description: response.data.user.data.description,
            donationsNeeded: donations
        })

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
                    <Card id="infoCard">
                        <CardBody>
                            <CardImg></CardImg>
                            <CardTitle><h4>{this.state.name}</h4></CardTitle>
                            <CardText>
                                <p><strong>Address:</strong> {this.state.address}</p>
                                <p><strong>Phone Number:</strong> {this.state.phone}</p>
                                <p><strong>About us:</strong> {this.state.description}</p>
                            </CardText>
                        </CardBody>
                    </Card>
                    <Card id="mapCard">
                        <CardBody>
                            <CardTitle><h4>Locate Us</h4></CardTitle>
                            <iframe width="525" height="300" frameborder="0"
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB_ZOlJblaoiNo202aVhKRaoy9uVduIdbA&q=Durham+Rescue+Mission,Durham+NC" allowfullscreen>>
                            </iframe>
                        </CardBody>
                    </Card>
                    <Card id="memberCard">
                        <CardBody>
                            <CardTitle><h4>Number of Occupants</h4></CardTitle>
                            <CardText>
                                <Button id="register" color="primary"><a href='../registerMember'>Register New Member</a></Button>
                                <Button color="info"><a href='../allMembers'>See All Members</a></Button>
                            </CardText>
                        </CardBody>
                    </Card>
                    <Card id="donationCard">
                        <CardBody>
                            <CardTitle><h4>Most Needed Donations</h4></CardTitle>
                            <CardText>
                                <div>
                                    <ul>
                                        {this.state.donationsNeeded}
                                    </ul>
                                </div>
                            </CardText>
                        </CardBody>
                    </Card>
                    
                    </div>}
            </div>
        )
    }
}

export default Dashboard;