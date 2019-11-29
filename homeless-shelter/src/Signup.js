import React from 'react';
import MyNavbar from './myNavbar.js';

class Signup extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <MyNavbar />
                <h1>Signup</h1>
            </div>
        )
    }
}

export default Signup;