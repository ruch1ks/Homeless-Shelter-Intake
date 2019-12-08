import axios from 'axios';

const userRoot = new axios.create({
    baseURL: "http://localhost:3000/user"
  });

export const getAllMembers = function() {
  return userRoot.get('./members', {
    headers: { Authorization : `Bearer ${localStorage.getItem("jwt")}`}
}).then(function (response) {
    console.log(response);
    return response;
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const registerMember = function(state) {
    userRoot.post('/members/' + state.id + "/", {
        data: {
            "id" : state.id,
            "first" : state.firstName,
            "last" : state.lastName, 
            "birthday" : state.birthday,
            "age" : state.age,
            "entry" : state.entryDate,
            "donationsNeeded" : state.donationsNeeded
        }
    }, {
        headers: { Authorization : `Bearer ${localStorage.getItem("jwt")}`}
    }).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}