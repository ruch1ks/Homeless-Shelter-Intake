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
            names: [],
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDebounce = this.handleChangeDebounce.bind(this);
        this.select = this.select.bind(this);
    }

    select(event) {
        localStorage.setItem("currMember", event.target.id);
        window.location = '/unregisterMember';
    }

    handleChangeDebounce(event) {
        //implementing debouncing, only one call every second
        setTimeout(this.handleChange(event), 1000);
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
            userInput: input,
            suggList : []
        });

        let suggestionsList = [];
        if(this.state.showSugg && this.state.userInput.length > 0) {
            if(this.state.filteredSugg.length > 0) {
                suggestionsList.push(
                    <div>
                        {this.state.filteredSugg.map((suggestion, index) => {
                            return (
                            <div id={suggestion} onClick={this.select} className="suggestions" key={suggestion}>
                                {suggestion}
                            </div>
                            );
                        })
                      }
                    </div>              
                );
            }
        }
        this.setState({
            suggList : suggestionsList
        });
    }

    async componentDidMount() {
        let response = await getAllMembers();
        let namesArr = [];
        console.log(response);
        if(typeof response.data.result !== 'undefined') {
            for(let obj in response.data.result) {
                let person = response.data.result[obj];
                namesArr.push(person.first + " " + person.last);
            }
        }

        this.setState({
            names : namesArr
        });
    }

    render() {

      return(
        <div id="autocomplete">
          <Form>
            <FormGroup row>
              <Label for="search"><h4>Unregister Member: </h4></Label>
                <Col>
                  <Input type="text" onChange={this.handleChangeDebounce} value={this.state.userInput} id="search" />
                       <div>
                       {this.state.suggList != undefined ? this.state.suggList[0] : null}
                        </div>
                </Col>
            </FormGroup>
          </Form>
        </div>
      );
    }
}

export default Autocomplete;