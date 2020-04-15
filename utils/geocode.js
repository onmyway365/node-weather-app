const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3ab638372c55916d0f7b69929f1d1baa&query=' + encodeURIComponent(address) + '&ZAR?units=m'

    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('unable to connect to weather services!', undefined)
        } else if (body.location.length === 0 ) {
            callback('unable to find the location. Try another search.', undefined)
        } else {
            const location = body.location
            callback(undefined, {
                latitude: location.lat,
                longitude: location.lon,
                location: location.name
            })
        }
    })    
}

module.exports = geocode