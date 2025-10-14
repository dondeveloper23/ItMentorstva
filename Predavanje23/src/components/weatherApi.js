import axios from "axios";
const apiKey = "f854567260b94aacbe8150111251410"

export async function getCurrentWeatherForLocation(location) {
    return  await axios.get("https://api.weatherapi.com/v1/current.json", {
        params: {
            key: apiKey,
            q: location,
            aqi: "no"
        }
    })

}

export async function getDaysWeatherForLocation(location, days) {
    return  await axios.get("https://api.weatherapi.com/v1/forecast.json", {
        params: {
            key: apiKey,
            q: location,
            aqi: "no",
            days: 7
        }
    })

}