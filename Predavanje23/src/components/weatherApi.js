import axios from "axios";


export async function getCurrentWeatherForLocation(location) {
    try {
        return  await axios.get(process.env.API_URL + "current.json", {
            params: {
                key: process.env.API_KEY,
                q: location,
                aqi: "no"
            }
        })
    } catch (error) {
        return alert("Something went wrong! Please try again later");
    }

}

export async function getDaysWeatherForLocation(location, days) {
    try {
        return  await axios.get(process.env.API_URL + "forecast.json", {
            params: {
                key: process.env.API_KEY,
                q: location,
                aqi: "no",
                days: days
            }
        })
    } catch (exception) {
        return alert("Something went wrong! Please try again later");
    }

}

export async function getWeatherInFuture(location, date) {
    try {
        return  await axios.get(process.env.API_URL + "future.json", {
            params: {
                key: process.env.API_KEY,
                q: location,
                dt: date
            }
        })
    } catch (exception) {
        return alert("Something went wrong! Please try again");
    }
}