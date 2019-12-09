import React from 'react';
import {Form, FormGroup, Label, Input, Col} from 'reactstrap';
import {getAllMembers} from './backend/userBackend.js';
import './Autocomplete.css';

class Autocomplete extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSugg: 0,
            filteredSugg: [],
            showSugg: false,
            userInput: '',
            names: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleChange(event) {
        let input = event.target.value;
        let filtered = this.state.names.filter((name) => {
            return name.toLowerCase().indexOf(input.toLowerCase()) > -1;
        });

        this.setState({
            activeSugg: 0,
            filteredSugg: filtered,
            showSugg: true,
            userInput: input
        });
    }

    handleKeyDown() {

    }

    async componentDidMount() {
        let response = await getAllMembers();
        let namesArr = [];

        for(var obj in response.data.result) {
            let person = response.data.result[obj];
            namesArr.push(person.first + " " + person.last);
        }

        this.setState({
            names : namesArr
        });
    }

    render() {
        let suggestionsList;
        if(this.state.showSugg && this.state.userInput.length > 0) {
            if(this.state.filteredSugg.length > 0) {
                suggestionsList = (
                    <ul>
                        {this.state.filteredSugg.map((suggestion, index) => {
                            return (
                              <li key={suggestion}>
                                  {suggestion}
                              </li>  
                            );
                        })
                      }
                    </ul>
                );
            }
        }
      return(
        <div id="autocomplete">
          <Form>
            <FormGroup row>
              <Label for="search"><h3>Search</h3></Label>
                <Col>
                  <Input type="text" onChange={this.handleChange} onKeyDown={this.handleKeyDown} value={this.state.userInput} id="search" />
                </Col>
            </FormGroup>
          </Form>
        </div>
      );
    }
}

export default Autocomplete;