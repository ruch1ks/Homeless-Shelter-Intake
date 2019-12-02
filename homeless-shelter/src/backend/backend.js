import axios from 'axios';

const accRoot = new axios.create({
    baseURL: "http://localhost:3000/account"
  });

const pubRoot = new axios.create({
    baseURL: "http://localhost:3000/public"
  });

export const createAccount = async function(state) {
    await accRoot.post('/create/', {
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
}

export const accToPublic = async function(state) {
    await pubRoot.post('/shelters/' + state.name, {
      data: { 
        "shelter": state.name,
        "phone": state.phone,
        "address": state.address,
        "description": state.description,
        "donations": [],
        "pledges": []
      },
      type: "merge"
    
}).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const delPubAcc = async function() {
    await pubRoot.delete('/shelters/test').then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}