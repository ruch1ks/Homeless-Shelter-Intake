import React from 'react';
import MyNavbar from './myNavbar.js';
import {Card, 
        CardTitle, 
        CardBody, 
        CardText, 
        Form, 
        FormGroup, 
        Label, 
        Input, 
        Button } from 'reactstrap';


class ShelterFeed extends React.Component {
    constructor() {
        super();

        this.state = {
            post : ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            post: event.target.value
        });
    }

    handleSubmit() {

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
                <div>
                    <Card>
                        <CardBody>
                            <CardTitle><h3>Post Your Announcement</h3></CardTitle>
                            <CardText>
                                <Form>
                                    <FormGroup>
                                        <Label for="post"></Label>
                                        <Input type="textarea" onChange={this.handleChange} name="post" id="post" placeholder="Communicate with other registered shelters"></Input>
                                    </FormGroup>
                                    <Button color="primary">Post Announcement</Button>
                                </Form>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                }
                </div>
            </div>
        )
    }

}

export default ShelterFeed;