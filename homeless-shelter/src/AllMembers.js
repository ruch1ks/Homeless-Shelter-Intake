import React from 'react';
import {Card, CardTitle, CardBody, CardText} from 'reactstrap';
import {getAllMembers} from './backend/userBackend.js';
import MyNavbar from './myNavbar.js';
import './AllMembers.css';

class AllMembers extends React.Component {
    constructor() {
        super();

        this.state = {
            members : []
        }
        
    }

    async componentDidMount() {
        let memberArr = [];
        let response = await getAllMembers();
        console.log(response.data.result);

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
            console.log(member);
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
                   {this.state.members}
               </div>}
           </div> 
        )
    }
}

export default AllMembers;