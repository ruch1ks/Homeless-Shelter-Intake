import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {getAccount} from "./backend/accBackend.js";
import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';

class myNavbar extends React.Component {
    constructor() {
      super();
      this.state = {
        name: ""
      }
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      localStorage.removeItem("jwt");
    }

    async componentDidMount() {
      let response = await getAccount();
      if(localStorage.getItem("jwt") != null) {
        this.setState({name: response.data.user.name});
      }
    }

    render() {
    return (
      <div>
        <Navbar className="navbar" color="light" light expand="md">
          <NavbarBrand href="/">
            Guardian Angels
          </NavbarBrand>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about/">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/all/">All Shelters</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/dashboard/">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/feed/">Shelter Feed</NavLink>
              </NavItem>
              </Nav>
              <Nav className="float-right">
                <div>
                  <p>{localStorage.getItem("jwt") != null ? "Logged in as: " + this.state.name + "  ": ""}</p>
                </div>
                <NavItem id="login">
                  {localStorage.getItem("jwt") == null ?
                  <Link to='/login'>
                    <Button className="login" color="primary">Login</Button>
                  </Link>
                  :
                  <Link to='/'>
                    <Button className="login" onClick={this.handleClick} color="info">Log out</Button>
                  </Link>
                  }
                  {localStorage.getItem("jwt") == null ?
                  <Link to='/signup'>
                  <Button color="secondary">Sign Up</Button>{' '}
                  </Link>
                  :
                  <Link to='/dashboard'>
                  <Button color="secondary">Dashboard</Button>{' '}
                  </Link>
                  }
                </NavItem>
                <NavItem>
                </NavItem>
              </Nav>
        </Navbar>
      </div>
    );
    }
  }
  
  export default myNavbar;
