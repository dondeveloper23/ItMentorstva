import axios from "axios";


console.log(process.env.OPENWEATHER_API_URL)

export async function getGeoLocationForCords(lat, lng) {
    return await axios.get(process.env.OPENWEATHER_API_URL + "reverse", {
        params: {
            lat: lat,
            lon: lng,
            limit: 3,
            appid: process.env.OPENWEATHER_API_KEY
        }
    })
}