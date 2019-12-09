import React from 'react';
import {Card, Button, CardBody, CardText} from 'reactstrap';
import {getAllMembers, deleteMember, calculateDonations} from './backend/userBackend.js';
import MyNavbar from './myNavbar.js';
import Autocomplete from './Autocomplete.js';
import './AllMembers.css';

class AllMembers extends React.Component {
    constructor() {
        super();

        this.state = {
            members : []
        }

        this.handleUnregister = this.handleUnregister.bind(this);
    }

    async handleUnregister(event) {
        let id = event.target.id;
        await deleteMember(id);
        await calculateDonations();

        //refresh the page
        setTimeout(callback => {
            window.location = '/allMembers'
        }, 500);
    }

    async componentDidMount() {
        let memberArr = [];
        let response = await getAllMembers();

        for(let obj in response.data.result) {
            let member = response.data.result[obj];
            memberArr.push(
                <Card>
                    <CardBody>
                        <CardText>
                            <h3>{member.first} {member.last}</h3>
                            <br/>
                            <p><strong>Age:</strong> {member.age}</p>
                            <p><strong>DOB:</strong> {member.birthday}</p>
                            <p><strong>Date of Entry:</strong> {member.entry}</p>
                        </CardText>
                    </CardBody>
                </Card>
            )
        }
        this.setState({
            members: memberArr
        })
    }

    render() {
        return(
           <div>
               <MyNavbar />
               {localStorage.getItem("jwt") == null ?
               <div id="notLoggedIn">
               <Card id="emptyCard">
                   <CardBody>
                       <CardText><h3>You must be logged in to view your dashboard</h3></CardText>
                   </CardBody>
               </Card>
               <br />
               <h5>Are you a registered shelter? <a href="../login">Log in</a> to view your dashboard</h5>
               <h5>Not a registered shelter yet? <a href="../signup">Sign up</a> today!</h5>
               </div> 
               :
               <div id="memberList">
                   <Autocomplete />
                   {this.state.members}
               </div>}
           </div> 
        )
    }
}

export default AllMembers;