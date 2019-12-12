import axios from 'axios';

// export const getLocation = function() {
//     if (navigator.geolocation) {
//         console.log(navigator.geolocation.getCurrentPosition(getWeather))
//         return navigator.geolocation.getCurrentPosition(getWeather);
//       } else {
//         return null;
//       }
// }

// export const getWeather = async function(location) {
//     return await axios({
//             method:'get',
//             url: 'https://api.weather.gov/points/' + location.coords.latitude + "," + location.coords.longitude
//         }).then(function(response) {
//             console.log(response);
            
//             return response;
//         }).catch(function(error) {
//             console.log(error);
//             return error;
//         });
// }

// export const getTemperature = async function(result) {
//     let endpoint = result.data.properties.forecast;
//     return await axios({
//             method:'get',
//             url: endpoint
//         }).then(function(response) {
//             console.log(response);
//             return response;
//         }).catch(function(error) {
//             console.log(error);
//             return error;
//         });
// }

export const getWeather = async function() {
    return await axios({
                    method:'get',
                    url: "https://api.weather.gov/gridpoints/RAH/59,63/forecast"
                }).then(function(response) {
                    console.log(response);
                    return response;
                }).catch(function(error) {
                    console.log(error);
                    return error;
                });

}