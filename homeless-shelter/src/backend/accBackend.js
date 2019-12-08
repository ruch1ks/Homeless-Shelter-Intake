import axios from 'axios';

const accRoot = new axios.create({
    baseURL: "http://localhost:3000/account"
  });

  export const login = async function(state) {
    await accRoot.post('/login', {
        "name": state.login,
        "pass": state.pass
    }).then(function (response) {
        console.log(response);
        localStorage.setItem("jwt", response.data.jwt);
        console.log(localStorage.getItem("jwt"));
    })
    .catch(function (error) {
        console.log(error.response.data.msg);
        return error.response.data.msg;
    });
};

export const createAccount = async function(state) {
    await accRoot.post('/create/', {
    "name": state.login,
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
    console.log(error.response.data.msg);
    return error.response.data.msg;
  });
}

export const getAccount = async function() {
  await accRoot.get('/status', {
    headers: { Authorization : `Bearer ${localStorage.getItem("jwt")}`}
  }).then(function (response) {
    console.log(response);
    return response;
  })
  .catch(function (error) {
    console.log(error);
    return error;
  });
}