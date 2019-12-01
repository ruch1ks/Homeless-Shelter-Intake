import React from 'react';
import MyNavbar from './myNavbar.js';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./Login.css";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            pass: ''
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

    handleSubmit(event) {
        console.log("handled submit");
    }

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
                        <Button onSubmit={this.handleSubmit}>Submit</Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Login;