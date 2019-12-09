import axios from 'axios';
import {getAccount} from './accBackend.js';
import {addingDonations} from './pubBackend.js';
 
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

export const deleteMember = function(id) {
  return userRoot.delete('./members/' + id, {
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

export const calculateDonations = async function() {
  //get members 
  let response = await getAllMembers();
  if(response == undefined) {
    return; 
  }
  let map = {}; 
  for(var obj in response.data.result) {
    let item = response.data.result[obj];
    //count frequencies of items
    for(let i = 0; i < item.donationsNeeded.length; i++) {
      if(!map.hasOwnProperty(item.donationsNeeded[i])) {
        map[item.donationsNeeded[i]] = 1;
      } else {
        map[item.donationsNeeded[i]] += 1;
      }
    }
  }
  //sort in descending order
  let sorted = [];
  for(let item in map) {
    sorted.push([item, map[item]]);
  }
  sorted.sort(function(a,b) {
    return b[1] - a[1];
  });

  //return 5 most needed
  let result = [];
  let length = sorted.length < 5 ? sorted.length : 5;
  for(let i = 0; i < length; i++) {
    result.push(sorted[i][0]);
  }

  //get shelter name
  let shelterInfo = await getAccount();
  let name = shelterInfo.data.user.data.shelterName;

  //post to public
  await addingDonations(name, result);

  return result;
}