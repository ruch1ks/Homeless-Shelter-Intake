import React from 'react';
import MyNavbar from './myNavbar.js';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import {accToPublic} from "./backend/pubBackend.js";
import {createAccount} from "./backend/accBackend.js";
import {login} from './backend/login.js';
import './Signup.css';


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            pass: '',
            confirmed: '',
            name: '',
            address: '',
            city: '',
            usState: '',
            phone: '',
            description: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let id = event.target.id;

        this.setState({
            login: (id == "username") ? event.target.value : this.state.login,
            pass: (id == "password") ? event.target.value : this.state.pass, 
            confirmed: (id == "confirm") ? event.target.value : this.state.confirmed,
            name: (id == "name") ? event.target.value : this.state.name,
            address: (id == "address") ? event.target.value : this.state.address,
            city: (id == "city") ? event.target.value : this.state.city,
            usState: (id == "state") ? event.target.value : this.state.usState,
            phone: (id == "phone") ? event.target.value : this.state.phone,
            description: (id == "description") ? event.target.value : this.state.description,
        });
    }

    validateAddress() {

    }
    async handleSubmit(event) {
        event.preventDefault();
        if(this.pass != this.confirmed) {
            alert("Your passwords do not match");
        } else {
            await createAccount(this.state);
            await accToPublic(this.state);
            await login(this.state);
            window.location = '/dashboard';
        }
    }

    render() {
        return(
            <div>
                <MyNavbar />
                <div id="signup">
                    <Form>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input type="text" onChange={this.handleChange} name="Username" id="username" placeholder="Username"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" onChange={this.handleChange} name="Password" id="password" placeholder="Password"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="confirm">Confirm Password</Label>
                            <Input type="password" onChange={this.handleChange} name="confirm" id="confirm" placeholder="Confirm Password"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="name">Shelter Name</Label>
                            <Input type="text" onChange={this.handleChange} name="Name" id="name" placeholder="Shelter Name"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="address">Address</Label>
                            <Input type="text" onChange={this.handleChange} name="Address" id="address" placeholder="ex. 123 Shelter Rd."></Input>
                        </FormGroup>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="city">City</Label>
                                    <Input type="text" onChange={this.handleChange} name="City" id="city" placeholder="ex. Sacramento"></Input>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="state">State</Label>
                                    <Input type="select" onChange={this.handleChange} name="State" id="state">
                                        <option>AL</option> <option>AK</option> <option>AR</option> <option>CA</option> <option>CO</option>
                                        <option>CT</option> <option>DE</option> <option>FL</option> <option>GA</option> <option>HI</option>
                                        <option>IA</option> <option>ID</option> <option>IL</option> <option>AN</option> <option>KS</option>
                                        <option>KY</option> <option>LA</option> <option>MA</option> <option>MD</option> <option>ME</option>
                                        <option>MI</option> <option>MN</option> <option>MO</option> <option>MS</option> <option>MT</option>
                                        <option>NC</option> <option>ND</option> <option>NE</option> <option>NH</option> <option>NJ</option>
                                        <option>NM</option> <option>NV</option> <option>NY</option> <option>OH</option> <option>OK</option>
                                        <option>OR</option> <option>PA</option> <option>RI</option> <option>SC</option> <option>SD</option>
                                        <option>TN</option> <option>TX</option> <option>UT</option> <option>VA</option> <option>VT</option>
                                        <option>WA</option> <option>WI</option> <option>WV</option> <option>WY</option>
                                    </Input>
                        </FormGroup>
                          </Col>
                        </Row>
                        <FormGroup>
                            <Label for="phone">Phone Number</Label>
                            <Input type="number" onChange={this.handleChange} name="Phone" id="phone" placeholder="ex. 123-456-7890"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input type="textarea" onChange={this.handleChange} name="text" id="description" placeholder="This will be displayed to users who can pledge donations to your shelter."></Input>
                        </FormGroup>
                        <Button onClick={this.handleSubmit}>Submit</Button>
                    </Form>
                </div>
]            </div>
        )
    }
}

export default Signup;