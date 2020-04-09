const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3ab638372c55916d0f7b69929f1d1baa&query=' + encodeURIComponent(address) + '&ZAR?units=m'

    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('unable to connect to weather services!', undefined)
        } else if (response.location === {} ) {
            callback('unable to find the location. Try another search.', undefined)
        } else {
            const location = response.body.location
            callback(undefined, {
                latitude: location.lat,
                longitude: location.lon,
                Location: location.name
            })
        }
    })    
}

module.exports = geocode