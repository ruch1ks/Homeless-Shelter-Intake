import axios from 'axios';

const privRoot = new axios.create({
    baseURL: "http://localhost:3000/private"
  });

export const getAllPosts = function() {
  return privRoot.get('/posts', {
    headers: { Authorization : `Bearer ${localStorage.getItem("jwt")}`}
  }).then(function (response) {
    console.log(response);
    return response;
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const makePost = function(state) {
  if(localStorage.getItem("postId") == null) {
    localStorage.setItem("postId", 0);
  } else {
    let currId = localStorage.getItem("postId");
    currId = parseInt(currId, 10);
    currId++;
    localStorage.setItem("postId", currId);
  }

  privRoot.post('/posts/' + localStorage.getItem("postId") + "/", {
    data : {
      author: state.shelterName,
      id: state.shelterId,
      post: state.post
    },
      type: "merge" 
    },
    {
      headers: { Authorization : `Bearer ${localStorage.getItem("jwt")}`}
    }
  ).then(function (response) {
    console.log(response);
    return response;
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const deletePost = function(id) {
  privRoot.delete('/posts/' + id, {
    headers: { Authorization : `Bearer ${localStorage.getItem("jwt")}`}
  }
).then(function (response) {
  console.log(response);
  return response;
})
.catch(function (error) {
  console.log(error);
});
}

