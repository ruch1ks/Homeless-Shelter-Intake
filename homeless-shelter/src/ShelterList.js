import React from 'react';
import MyNavbar from './myNavbar.js';
import {getPubAccs, addingDonations, testGet, delPubAcc} from './backend/pubBackend.js';
import {Card, CardBody, CardTitle, CardText, Button} from 'reactstrap';
import "./ShelterList.css";

class ShelterList extends React.Component {
    constructor() {
        super();

        this.state = {
            data : [],
            makingPledge : false
        }

        let test = ['Shoes'];
        testGet("test2");
        //addingDonations("test", test);
        this.handlePledge = this.handlePledge.bind(this);
    }

    handlePledge(event) {
        console.log(event.target.id);
    }
    async componentDidMount() {
        let response = [];
        let result = [];
        let donationList = [];
        let pledgeList = [];
        
        await getPubAccs().then((value) => {
            for(const shelter in value) {
                response.push(value[shelter]);
            }
        });

        console.log(response);
        for(let i = 0; i < response.length; i++) {    
            for(let j = 0; j < response[i][0].donations.length; j++) {
                donationList.push(<li>{response[i][0].donations[j]}</li>)
            }       
            for(let j = 0; j < response[i][0].donations.length; j++) {
                pledgeList.push(<li>{response[i][0].donations[j]}</li>)
            }
            result.push(<div>
                <Card>
                    <CardBody>
                        <CardTitle><h3>{response[i][0].shelter}</h3></CardTitle>
                        <CardText>
                            <p>Address: {response[i][0].address}</p>
                            <p>Phone: {response[i][0].phone}</p>
                            <p>About: {response[i][0].about}</p>
                            <h6>Most Needed Donations:</h6>
                            <ul>{donationList}</ul>
                            <Card>
                                <CardBody>
                                    <CardTitle><h5>Pledges</h5></CardTitle>
                                    <CardText><ul>{pledgeList}</ul></CardText>
                                    {this.state.makingPledge ? null : <Button id={response[i][0].shelter + "pledge"} color="primary" onClick={this.handlePledge}>Pledge Now!</Button>}
                                </CardBody>
                            </Card>
                        </CardText>
                    </CardBody>
                </Card>
            </div>)
        }
        this.setState({
            data : result
        });
    } 

    render() {

        return(
            <div>
                <MyNavbar />
                <div id="allShelters">
                {this.state.data}
                </div>
            </div>
        );
    }
        
}

export default ShelterList;