import React from 'react';
import MyNavbar from './myNavbar.js';
import {Card, 
        CardTitle, 
        CardBody, 
        CardText, 
        Form, 
        FormGroup, 
        Label, 
        Input, 
        Button } from 'reactstrap';
import {getShelterName, getShelterId} from './backend/accBackend.js';
import {makePost, getAllPosts, deletePost} from './backend/privBackend.js';

class ShelterFeed extends React.Component {
    constructor() {
        super();

        this.state = {
            post : '',
            shelterName : '',
            shelterId : '',
            allPosts: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        this.renderPosts();
    }

    async handleDelete(event) {
        await deletePost(event.target.id);
        this.renderPosts();
    }

    handleChange(event) {
        this.setState({
            post: event.target.value
        });
    }

    async handleSubmit(event) {
        await makePost(this.state);
        this.renderPosts();
    }

    async renderPosts() {
       this.setState({
           shelterId : await getShelterId(),
           shelterName : await getShelterName()
       });
       
       let allPosts = await getAllPosts();
       let postCards = [];
       for(var obj in allPosts.data.result) {
           let post = allPosts.data.result[obj][0];
           postCards.push(
               <Card>
                <CardBody>
                    <CardTitle><h5>{post.author}</h5></CardTitle>
                    <CardText><p>{post.post}</p></CardText>
                    {post.id == this.state.shelterId ? 
                    <Button onClick={this.handleDelete} id={obj} color="danger">Delete Post</Button> : null}
                </CardBody>  
               </Card>
           )
       }

       this.setState({
           allPosts : postCards
       })
    }

    render() {
        return(
            <div>
                <MyNavbar />
                <div id="container">
                {localStorage.getItem("jwt") == null ? 
                <div>
                    <Card>
                        <CardBody>
                            <CardTitle><h3>You must be logged in to view this page</h3></CardTitle>
                        </CardBody>
                    </Card>
                </div> : 
                <div>
                    <Card>
                        <CardBody>
                            <CardTitle><h3>Post Your Announcement</h3></CardTitle>
                            <CardText>
                                <Form>
                                    <FormGroup>
                                        <Label for="post"></Label>
                                        <Input type="textarea" onChange={this.handleChange} name="post" id="post" placeholder="Communicate with other registered shelters"></Input>
                                    </FormGroup>
                                    <Button onClick={this.handleSubmit} color="primary">Post</Button>
                                </Form>
                            </CardText>
                        </CardBody>
                    </Card>
                    <div>
                        {this.state.allPosts}
                    </div>
                </div>
                }
                </div>
            </div>
        )
    }

}

export default ShelterFeed;