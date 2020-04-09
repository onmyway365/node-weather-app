const request = require('request')
const geocode = require('./utils/geocode')

// const url = 'http://api.weatherstack.com/current?access_key=3ab638372c55916d0f7b69929f1d1baa&query=johannesburg&ZAR?units=m'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('unable to connect to weather service')
//     } else if (response.body.error) {
//         console.log('unable to fiind your location')
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degress.')
//     }
// })

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('unable to connect to weather service')
//     } else if (response.location === {} ) {
//         console.log(response.body)
//     } else {
//         const location = response.body.location
//         console.log('The latitude of your location is ' + location.lat + ' and your longitute is ' + location.lon)
//     }
// })



geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})