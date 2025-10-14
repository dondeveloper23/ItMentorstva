
import {getUserLocation} from "./components/locations";
import {getCurrentWeatherForLocation, getDaysWeatherForLocation} from "./components/weatherApi";

// https://api.weatherapi.com/v1/current.json?key=&q=London&aqi=no

// HTML Elements
const changeButton = document.querySelector("#change-button");
const maxTempDiv = document.getElementById("max-temp-div");

let location = localStorage.getItem("location") || getUserLocation();
localStorage.setItem("location", location);

changeButton.addEventListener("click", () => {
    location = getUserLocation()
    localStorage.setItem("location", location);

})


const response = await getCurrentWeatherForLocation(location)

if (!response.data.current.is_day) {
    document.body.style.backgroundColor = "#171c2b"
}

const daysWeatherResponse = await getDaysWeatherForLocation(location, 7);

for (let day of daysWeatherResponse.data.forecast.forecastday) {
    let maxTempDay = document.createElement("p");
    maxTempDay.textContent = day.day.maxtemp_c

    maxTempDiv.append(maxTempDay);
}
