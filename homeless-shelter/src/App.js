import React from 'react';
import './bulma.css';
import './pictures/angel.png';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    }
    const pubRoot = new axios.create({
      baseURL: "http://localhost:3000/account"
    });
    /*pubRoot.post('/create/', {
      "name": "booty",
      "pass": "pass123",
      "data": {
        "phone": "phoneNum",
        "address": "123 Durham"
      }
    }).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });*/
  }

  render() {
    return(
      <div className="App">
      <section className="hero is-primary">
        <div className="hero-body">
        <div className="container">
          <h1 className="title">Guardian Angels</h1>
          <h2 className="subtitle">No one gets left behind.</h2>
          <h3>Donate now and help those in need.</h3>
        </div>
        </div>
      </section>
      <section>
      <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="./pictures/angel.png" width="25" height="50"></img>
          </a>
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              Home
            </a>
            <a className="navbar-item" onClick={this.setRedirect}>
              About Us
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                Shelters
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item">
                  Near me
                </a>
                <a className="navbar-item">
                  Contact
                </a>
                <a className="navbar-item">
                  Add a shelter
                </a>
                <a className="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a id="signUp" className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section> 
    <section className="section">
    <div className="container">
        <div className="content">
            <h1 className="title">Our Mission:</h1>
            <h3 className="subtitle is-grey is-6">And our values.</h3>
            <p>Bacon ipsum dolor amet turducken kielbasa alcatra meatball jowl tenderloin buffalo pastrami short ribs chicken cow turkey. Turkey short loin meatball buffalo sausage boudin. Jerky short loin chuck ribeye pastrami shoulder, t-bone pig tail tenderloin shankle filet mignon picanha ham. Tongue ground round leberkas, tri-tip turducken beef rump ribeye meatloaf short ribs pancetta. Jowl strip steak porchetta, tri-tip spare ribs fatback beef kevin doner tenderloin sausage salami swine tail. Corned beef boudin shank drumstick burgdoggen cupim buffalo.
                    Jerky venison ball tip, tail beef ribs bresaola spare ribs. Ball tip buffalo leberkas, andouille salami filet mignon tri-tip jowl shoulder cow porchetta kevin short loin. Cow rump turkey andouille burgdoggen landjaeger picanha bresaola. Corned beef beef ribs beef, ground round pig jerky shankle swine ham chicken. Ball tip alcatra leberkas meatball pastrami, frankfurter ribeye. Pancetta beef shoulder beef ribs, turducken cupim cow ham hock short ribs.</p>
        </div>
    </div>
    </section>
    </div>
  );
    }
}

export default App;
