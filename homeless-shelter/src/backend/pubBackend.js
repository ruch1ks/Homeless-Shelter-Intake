import axios from 'axios';

const pubRoot = new axios.create({
    baseURL: "http://localhost:3000/public"
  });

export const accToPublic = async function(state) {
    await pubRoot.post('/shelters/' + state.name + "/", {
      data: { 
        "user" : state.user,
        "shelter": state.name,
        "phone": state.phone,
        "address": state.address,
        "city" : state.city,
        "state" : state.usState,
        "description": state.description,
        "donations": [],
        "pledges": {}
      },
    }).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const editShelterData = async function(state) {
  return await pubRoot.post('/shelters/' + state.name + "/", {
    data: { 
      "phone": state.phone,
      "address": state.address,
      "city" : state.city,
      "state" : state.usState,
      "description": state.description,
    },
  }).then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
}

export const getPubAccs = async function() {
    let data = "";
    return await pubRoot.get('/shelters')
    .then(function (response) {
        console.log(response.data.result);
        return response.data.result;
      })
      .catch(function (error) {
        console.log(error);
      });

      return data;     
}

//not sure where this will be useful
export const delPubAcc = async function() {
    await pubRoot.delete('/shelters/Shelter_bb')
    .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

export const getShelter = async function(name) {
    await pubRoot.get('/shelters/' + name )
    .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
export const addingDonations = async function(name, donations) {
    await pubRoot.post('/shelters/' + name + '/donations/', {
        data : donations,
    })
    .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

export const addingPledges = async function(shelter, nameStr, messageStr, pledgeArr) {
    await pubRoot.post('/shelters/' + shelter + '/pledges/', {
      data : {
        name : nameStr,
        message : messageStr,
        pledge: pledgeArr
      },
      type : "merge"
    })
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
}