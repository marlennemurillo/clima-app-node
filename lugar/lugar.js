const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodedUlr = encodeURI(dir);

    //console.log(encodedUlr);

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodedUlr}`,
        headers: { 'x-rapidapi-key': '423955d301mshb78e0c2c28bc6fcp16151bjsna61ddb641287' }
    });

    const resp = await instance.get();

    /*    instance.get()
            .then(resp => {
                console.log(resp.data.main.temp);
            })
            .catch(err => {
                console.log('ERROR!!!!', err);
            })*/

    if (resp.data.main == 0) {

        throw new Error(`No hay resultados para  ${ dir}`);
    }

    const data = resp.data.main[0];
    const direccion = resp.data.name;
    const lat = resp.data.coord.lat;
    const lng = resp.data.coord.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}