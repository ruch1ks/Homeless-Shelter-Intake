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

    componentDidMount() {
        let data = [];
        let result = [];

        result.push(<div>test</div>);
        
        getPubAccs().then((value => {
            data.push(value);
        }))

        console.log(data.length);
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