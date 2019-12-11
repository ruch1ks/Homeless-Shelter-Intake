import axios from 'axios';

const accRoot = new axios.create({
    baseURL: "http://localhost:3000/account"
  });

  export const login = async function(state) {
    return await accRoot.post('/login', {
        "name": state.login,
        "pass": state.pass
    }).then(function (response) {
        localStorage.setItem("jwt", response.data.jwt);
        return response
    })
    .catch(function (error) {
        return error;
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
  return await accRoot.get('/status', {
    headers: { Authorization : `Bearer ${localStorage.getItem("jwt")}`}
  }).then(function(response) {
    console.log(response);
    return response;
  })
  .catch(function (error) {
    console.log(error);
    return error;
  });
}

export const getShelterName = async function() {
  let response = await getAccount();
  return response.data.user.data.shelterName;
}

export const getShelterId = async function() {
  let response = await getAccount();
  return response.data.user.name;
}