import axios from 'axios';

const privRoot = new axios.create({
    baseURL: "http://localhost:3000/private"
  });

export const getAllPosts = function() {
  privRoot.get('/posts', {
    headers: { Authorization : `Bearer ${localStorage.getItem("jwt")}`}
  }).then(function (response) {
    console.log(response);
    return response;
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const createPost = function() {
  
}

