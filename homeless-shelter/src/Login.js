import React from 'react';
import MyNavbar from './myNavbar.js';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {login} from "./backend/accBackend.js";
import "./Login.css";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            pass: '',
            incorrect: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let id = event.target.id;
        this.setState({
            login: (id == "username") ? event.target.value : this.state.login,
            pass: (id == "password") ? event.target.value : this.state.pass
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        let response = await login(this.state);

        //will be undefined on successful login
        if(response.response == undefined) {
            window.location = '/dashboard/';
        } else {
            this.setState({
                incorrect : 'Incorrect username or password'
            })
        }
    };
            

    render() {
        return( 
            <div>
                <MyNavbar />
                <div id="loginForm">
                    <h1>Login As Shelter</h1>
                    <br />
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
                            <Label>{this.state.incorrect}</Label>
                        </FormGroup>
                        <Button onClick={this.handleSubmit}>Submit</Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Login;