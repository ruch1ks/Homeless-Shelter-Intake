import React from 'react';
import MyNavbar from './myNavbar.js';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {createAccount} from "./backend/backend.js";
import './Signup.css';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pass: '',
            confirmed: '',
            name: '',
            address: '',
            phone: '',
            description: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let id = event.target.id;

        this.setState({
            user: (id == "username") ? event.target.value : this.state.user,
            pass: (id == "password") ? event.target.value : this.state.pass, 
            confirmed: (id == "confirm") ? event.target.value : this.state.confirmed,
            name: (id == "name") ? event.target.value : this.state.name,
            address: (id == "address") ? event.target.value : this.state.address,
            phone: (id == "phone") ? event.target.value : this.state.phone,
            description: (id == "description") ? event.target.value : this.state.description,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        createAccount(this.state);
    }

    render() {
        return(
            <div>
                <MyNavbar />
                <div id="signup">
                    <Form>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input type="email" onChange={this.handleChange} name="Username" id="username" placeholder="Username"></Input>
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
                            <Input type="email" onChange={this.handleChange} name="Name" id="name" placeholder="Shelter Name"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="address">Address</Label>
                            <Input type="email" onChange={this.handleChange} name="Address" id="address" placeholder="ex. 123 Shelter Rd."></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">Phone Number</Label>
                            <Input type="email" onChange={this.handleChange} name="Phone" id="phone" placeholder="ex. (123) 456-7890"></Input>
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