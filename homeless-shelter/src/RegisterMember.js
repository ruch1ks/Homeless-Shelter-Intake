import React from 'react';
import MyNavbar from './myNavbar.js';
import {Card, CardBody, CardTitle} from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './RegisterMember.css';
import {registerMember} from './backend/userBackend.js';
class RegisterMember extends React.Component {

    constructor() {
        super();
        this.state = {
            id : '-1',
            firstName : '',
            lastName : '',
            birthday : '',
            age : '',
            entryDate : '',
            donationsNeeded : [],
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);

    }

    handleChange(event) {
        let id = event.target.id;

        this.setState({
            firstName: (id == "firstName") ? event.target.value : this.state.firstName,
            lastName: (id == "lastName") ? event.target.value : this.state.lastName, 
            birthday: (id == "birthday") ? event.target.value : this.state.birthday,
            age: (id == "age") ? event.target.value : this.state.age,
            entryDate: (id == "entry") ? event.target.value : this.state.entryDate,
        });
    }

    async handleSubmit() {
        let currId = localStorage.getItem("currId");
        console.log("currId is " + currId);
        if(currId == null) {
            localStorage.setItem("currId", 0);
        } else {
            currId = parseInt(currId, 10);
            currId++;
            localStorage.setItem("currId", currId);
        }

        let temp = localStorage.getItem("currId");
        this.setState({
            id : temp
        });

        setTimeout(callback => {
            if(this.state.id != -1) registerMember(this.state);
        }, 500);

        setTimeout(callback => {window.location = '/allMembers'}, 500);
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
            donationsNeeded : temp
        });
    }

    render() {
        return(
            <div> 
                <MyNavbar />
                <div id="container">
                {localStorage.getItem("jwt") == null ? 
                <div>
                    <Card>
                        <CardBody>
                            <CardTitle><h3>You must be logged in to view this page</h3></CardTitle>
                        </CardBody>
                    </Card>
                </div> : 
            <Form>
                <h3>Register New Member</h3> 
                <br />
                <FormGroup>
                    <Label for="firstName">First Name</Label>
                    <Input type="text" onChange={this.handleChange} name="firstName" id="firstName" placeholder="First Name"></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="lastName">Last Name</Label>
                    <Input type="text" onChange={this.handleChange} name="lastName" id="lastName" placeholder="Last Name"></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="age">Age</Label>
                    <Input type="number" onChange={this.handleChange} name="age" id="age" placeholder="Age (in years)"></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="birthday">Date of Birth</Label>
                    <Input type="date" onChange={this.handleChange} name="birthday" id="birthday" placeholder="MM/DD/YYYY"></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="entry">Date of Entry</Label>
                    <Input type="date" onChange={this.handleChange} name="entry" id="entry" placeholder="MM/DD/YYYY"></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="select">Most Needed Items (Press Ctrl+Click to select multiple items)</Label>
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
                <FormGroup>
                    <Button color="primary" onClick={this.handleSubmit}>Submit</Button>
                </FormGroup>
            </Form>}
            </div>
            </div>
        )
    }
    
}

export default RegisterMember; 