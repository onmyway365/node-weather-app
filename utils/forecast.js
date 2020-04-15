const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3ab638372c55916d0f7b69929f1d1baa&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('unable to find the location. Try another search.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + 
            body.current.temperature + ' degrees out. It feels like ' + 
            body.current.feelslike + ' degress.')
        }
    })
}

module.exports = forecast