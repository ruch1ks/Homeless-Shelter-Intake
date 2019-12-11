import React from 'react';
import MyNavbar from './myNavbar.js';
import {getPubAccs, addingPledges} from './backend/pubBackend.js';
import {Card, CardBody, CardTitle, CardText, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import "./ShelterList.css";

class ShelterList extends React.Component {
    constructor() {
        super();

        this.state = {
            currShelter: '',
            makingPledge : false,
            data : [],
            response : [],
            pledges : [],
            name : '',
            message: ''
        }

        this.handlePledge = this.handlePledge.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    //for registering changes to message and name
    handleChange(event) {
        let id = event.target.id;

        this.setState({
            name: (id == "name") ? event.target.value : this.state.name,
            message: (id == "message") ? event.target.value : this.state.message, 
        });
    }

    //for registering multiple select
    handleSelect(event) {
        let arr = event.target.options;
        let temp = [];

        for(let i = 0; i < arr.length; i++) {
            if(arr[i].selected) {
                temp.push(arr[i].value);
            }
        }

        this.setState({
            pledges : temp
        });
    }

    handlePledge(event) {
        let result = this.state.data;

        let id = event.target.id.substring(9);
        this.setState({
            makingPledge : true,
            currShelter : id
        });

        for(let i = 0; i < this.state.data.length; i++) {
            if(this.state.data[i].key == id) {
                result[i] = <div>
                    <Card>
                      <CardBody>
                      <div>
                      <Form>
                        <FormGroup>
                          <Label for="name">Name</Label>
                          <Input type="text" onChange={this.handleChange} name="name" id="name" placeholder="Name (optional)"></Input>
                        </FormGroup>  
                        <FormGroup>
                          <Label for="message">Message</Label>
                          <Input type="text" onChange={this.handleChange} name="message" id="message" placeholder="Message (optional)"></Input>
                        </FormGroup> 
                        <FormGroup>
                          <Label for="select">Pledge Items (Press Ctrl+Click to select multiple items)</Label>
                          <Input onChange={this.handleSelect} type="select" name="select" id="select" multiple>
                            <option>Bottled Water</option>
                            <option>Undergarments</option>
                            <option>Socks</option>
                            <option>Gift Cards (for chain stores)</option>
                            <option>Toothbrushes/Toothpaste</option>
                            <option>Travel-Size Soap/Shampoo</option>
                            <option>Combs/Hairbrushes</option>
                            <option>Baby Care (wipes, diapers, baby food, etc)</option>
                            <option>Sleeping Bags</option>
                            <option>Warm Clothing (coats, gloves, scarves, etc)</option>
                            <option>Reading Glasses</option>
                          </Input>
                        </FormGroup>
                        <Button onClick={this.handleSubmit} color="primary">Submit Pledge</Button> 
                        <Button onClick={this.handleCancel}>Cancel</Button>  
                      </Form>
                      </div>          
                      </CardBody>
                    </Card>
                  </div>
            }
        }
    }

    //handling submission of pledges
    async handleSubmit(event) {
        if(this.state.pledges.length != 0) {
            let name = this.state.name.length == 0 ? '' : this.state.name;
            let message = this.state.message.length == 0 ? '' : this.state.message;

            await addingPledges(this.state.currShelter, name, message, this.state.pledges);
        }

        this.setState({
            makingPledge : false,
            currShelter : ''
        })
        
        setTimeout(this.renderShelters(), 1500);
    }

    handleCancel(event) {
        this.setState({
            makingPledge : false,
            currShelter : ''
        })
        this.renderShelters();
    }

    renderShelters() {
        let response = this.state.response;
        let result = [];

        for(let i = 0; i < response.length; i++) {
            let donationList = [];
            let pledgeList = [];    
            if(response[i].donations) {
                for(let j = 0; j < response[i].donations.length; j++) {
                    donationList.push(<li>{response[i].donations[j]}</li>)
                }
            }
            if(response[i].pledges)
                for(let j = 0; j < response[i].pledges.length; j++) {

                    let items = [];
                    if(response[i].pledges[j].pledge != undefined) {
                    for(let k = 0; k < response[i].pledges[j].pledge.length; k++) {
                        items.push(<li>{response[i].pledges[j].pledge[k]}</li>);
                    }
                    let name = response[i].pledges[j].name.length == 0 ? "Anonymous" : response[i].pledges[j].name;
                    pledgeList.push(<li>{name}: {response[i].pledges[j].message} <ul>{items}</ul></li>)
                }
            }
            result.push(<div key={response[i].shelter}>
                <Card>
                    <CardBody>
                        <CardTitle><h3>{response[i].shelter}</h3></CardTitle>
                        <CardText>
                            <p>Address: {response[i].address}</p>
                            <p>Phone: {response[i].phone}</p>
                            <p>About: {response[i].about}</p>
                            <h6>Most Needed Donations:</h6>
                            <ul>{donationList}</ul>
                            <Card>
                                <CardBody>
                                    <CardTitle><h5>Pledges</h5></CardTitle>
                                    <CardText>{pledgeList.length == 0 ? <p>No pledges yet, add yours below!</p> : <ul>{pledgeList}</ul>}</CardText>
                                    <Button id={"pledgeBtn" + response[i].shelter} color="primary" onClick={this.handlePledge}>Pledge Now!</Button>
                                </CardBody>
                            </Card>
                            <div id={response[i].shelter + "pledge"}></div>
                        </CardText>
                    </CardBody>
                </Card>
            </div>)
        }
        this.setState({
            data : result
        })
    }

    async componentDidMount() {
        let res = [];

        let result = await getPubAccs();
        for(const shelter in result) {
            res.push(result[shelter]);
        }
        console.log(res);
          

        this.setState({
            response : res
        })

        this.renderShelters();
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