import React from 'react';
import MyNavbar from './myNavbar.js';
import {Card, CardBody, CardTitle, CardText} from 'reactstrap';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {getAllMembers, deleteMember, calculateDonations} from './backend/userBackend.js';
import './UnregisterMember.css';

class UnregisterMember extends React.Component {
    constructor() {
        super();

        this.state = {
            name: '',
            id: ''
        }

        this.handleDelete = this.handleDelete.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    async handleDelete(event) {
        await deleteMember(this.state.id);
        await calculateDonations();

        localStorage.removeItem("currMember");

        //redirect to all members
        setTimeout(callback => {
            window.location = '/allMembers'
        }, 500);
    }

    handleCancel(event) {
        localStorage.removeItem("currMember");
        window.location = '/allMembers';
    }

    async componentDidMount() {
        if(localStorage.getItem("currMember") != null) {
            let response = await getAllMembers();
            for(var obj in response.data.result) {
            let person = response.data.result[obj];
            let name = person.first + " " + person.last;
            
            //set correct id for deletion
            if(name == localStorage.getItem("currMember")) {
                this.setState({
                    id: person.id,
                    name: name
                })
            }
        }
        }

    }

    render() {
        return(
            <div>
                <MyNavbar />
                <div>
                    {localStorage.getItem("currMember") == null ?
                    <Card id="error">
                        <CardBody>
                            <CardTitle><h3>Uh oh! You shouldn't be here</h3></CardTitle>
                            <CardText>Click <a href="/">here</a> to return to the homepage</CardText>
                        </CardBody>
                    </Card>
                    :
                    <div>
                        <Card id="delete">
                            <CardBody>
                                <CardTitle>
                                    <h3>Are you sure you want to unregister <u>{this.state.name}</u>?</h3>
                                    <p>This cannot be undone</p>
                                </CardTitle>
                                <CardText>
                                    <Form>
                                        <FormGroup>
                                            <Label for="exitDate">Exit Date (optional)</Label>
                                            <Input type="date" name="exitDate" id="exitDate" placeholder="mm/dd/yyyy"></Input>
                                        </FormGroup>
                                    </Form>
                                </CardText>
                                <Button onClick={this.handleDelete} id="delBtn" color="danger">Delete</Button>
                                <Button onClick={this.handleCancel}>Cancel</Button>
                            </CardBody>
                        </Card>
                    </div>}
                </div>
            </div>
        )
    }
}
export default UnregisterMember;