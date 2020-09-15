const axios = require('axios');


const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=6326d04c0fe9c4b50dc5486135bc6202&units=metric`)
    return resp.data.main.temp;
}


module.exports = {
    getClima
}