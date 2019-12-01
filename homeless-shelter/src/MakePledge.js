import react from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class MakePledge extends React.Component {
    constructor() {
        super();

        this.state = {
            name : '',
            message : '',

        }
    }

    handleChange(event) {
        let id = event.target.id;

        this.setState({
            name: (id == "name") ? event.target.value : this.state.name,
            message: (id == "message") ? event.target.value : this.state.message, 
        });
    }
    render() {
        return(
            <div>
              <Form>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input type="text" onChange={this.handleChange} name="name" id="name" placeholder="Name (optional)"></Input>
                </FormGroup>  
                <FormGroup>
                  <Label for="message">Message</Label>
                  <Input type="text" onChange={this.handleChange} name="message" id="message" placeholder="Message (optional)"></Input>
                </FormGroup> 
                <FormGroup>
                </FormGroup>
              </Form>
            </div>
        )
    }
}

export default MakePledge;