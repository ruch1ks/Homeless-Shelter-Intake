import axios from 'axios';

const pubRoot = new axios.create({
    baseURL: "http://localhost:3000/account"
  });

export const createAccount = (state) => pubRoot.post('/create/', {
    "name": state.user,
    "pass": state.pass,
    "data": {
      "shelterName": state.name,
      "phone": state.phone,
      "address": state.address,
      "description": state.description
    }
  }).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
