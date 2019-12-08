import React from 'react';
import {Card, CardBody, CardText} from 'reactstrap';
import {getAllMembers} from './backend/userBackend.js';
import MyNavbar from './myNavbar.js';

class AllMembers extends React.Component {
    constructor() {
        super();

        this.state = {
            members : []
        }
        
    }

    async componentDidMount() {
        let response = await getAllMembers();
        console.log(response);
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
               <div> 
                   <p>testing</p>
               </div>}
           </div> 
        )
    }
}

export default AllMembers;