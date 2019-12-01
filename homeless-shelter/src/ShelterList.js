import React from 'react';
import MyNavbar from './myNavbar.js';
import {getPubAccs} from './backend/pubBackend.js';
import {Card, CardBody, CardTitle, CardText} from 'reactstrap';
class ShelterList extends React.Component {
    constructor() {
        super();

        this.state = {
            data : []
        }
    }

    async componentDidMount() {
        let response = [];
        let result = [];

        result.push(<div>test</div>);
        
        await getPubAccs().then((value) => {
            for(const shelter in value) {
                response.push(value[shelter]);
            }
        });

        for(let i = 0; i < response.length; i++) {           
            result.push(<div>
                <Card>
                    <CardBody>
                        <CardTitle><h3>{response[i][0].shelter}</h3></CardTitle>
                        <CardText>
                            <p>Address: {response[i][0].address}</p>
                            <p>Phone: {response[i][0].phone}</p>
                            <p>About: {response[i][0].about}</p>
                        </CardText>
                    </CardBody>
                </Card>
            </div>)
        }
        this.setState({
            data : result
        });
    } 

    render() {

        return(
            <div>
                <MyNavbar />
                <h1>All Shelters</h1>
                {this.state.data}
            </div>
        );
    }
        
}

export default ShelterList;