import {getDaysWeatherForLocation} from "./weatherApi";

export async function elementAppend (element, location, days) {
    const daysWeatherResponse = await getDaysWeatherForLocation(location, days);
    element.innerHTML = ``
    for (let day of daysWeatherResponse.data.forecast.forecastday) {
        let maxTempDay = document.createElement("p");
        maxTempDay.classList.add("temperatureParagraph")
        let temp = day.day.maxtemp_c
        if (temp > 15) {
            maxTempDay.innerText =`${temp}°C ☀️`;
        } else {
            maxTempDay.innerText = `${temp}°C ☁️`;
        }


        element.append(maxTempDay);
    }
}