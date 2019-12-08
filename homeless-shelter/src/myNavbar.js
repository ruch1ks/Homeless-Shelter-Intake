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
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Home</NavbarBrand>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/about/">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/all/">All Shelters</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/dashboard/">Dashboard</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              </Nav>
              <Nav className="float-right">
                <NavItem id="login">
                  {localStorage.getItem("jwt") == null ?
                  <Link to='/login'>
                    <Button color="primary">Login</Button>
                  </Link>
                  :
                  <Link to='/'>
                    <Button onClick={this.handleClick} color="info">Log out</Button>
                  </Link>
                  }
                  <Link to='/signup'>
                  <Button color="secondary">Sign Up</Button>{' '}
                  </Link>
                </NavItem>
                <NavItem>
                <div>
                  <p>{localStorage.getItem("jwt") != null ? "Logged in as \n" + this.state.name : ""}</p>
                </div>
                </NavItem>
              </Nav>
        </Navbar>
      </div>
    );
    }
  }
  
  export default myNavbar;
