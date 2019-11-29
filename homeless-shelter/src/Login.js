import React from 'react';
import MyNavbar from './myNavbar.js';

class Login extends React.Component {
    constructor() {
        super();
    }

    render() {
        return( 
            <div>
                <MyNavbar />
                <h1>Login</h1>
            </div>
        )
    }
}

export default Login;