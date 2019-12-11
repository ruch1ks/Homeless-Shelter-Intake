import React from 'react';
import MyNavbar from './myNavbar.js';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import {editShelterData} from './backend/pubBackend.js';
import './Signup.css';

import {test} from './backend/mapsBackend.js';
import { getAccount } from './backend/accBackend.js';

class MyAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        
        console.log(this.state.name)
        let response = await editShelterData(this.state);
        console.log(response);
        
        // window.location = '/dashboard';
    }

    async componentDidMount() {
        console.log('here');
        let response = await getAccount();
        console.log(response);
        this.setState({
            name: response.data.user.data.name,
            address: response.data.user.address,
            city: response.data.user.city,
            usState: response.data.user.usState,
            phone: response.data.user.phone,
            description: response.data.user.description
        });
    }

    render() {
        return(
            <div>
                <MyNavbar />
                <div id="signup">
                    <h1>Edit your Shelter Information</h1>
                    <Form>
                        <FormGroup>
                            <Label for="address">Address</Label>
                            <Input type="text" onChange={this.handleChange} name="Address" id="address" value={this.state.address}></Input>
                        </FormGroup>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="city">City</Label>
                                    <Input type="text" onChange={this.handleChange} name="City" id="city" value={this.state.city}></Input>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="state">State</Label>
                                    <Input type="select" onChange={this.handleChange} name="State" id="state" value={this.state.usState}>
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
                            <Input type="number" onChange={this.handleChange} name="Phone" id="phone" value={this.state.phone}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input type="textarea" onChange={this.handleChange} name="text" id="description" value={this.state.description}></Input>
                        </FormGroup>
                        <Button onClick={this.handleSubmit}>Submit</Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default MyAccount;