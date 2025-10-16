import {getCurrentWeatherForLocation} from "./weatherApi";

export async function isNight(location) {
    const response = await getCurrentWeatherForLocation(location)
    if (!response.data.current.is_day) {
        document.body.style.backgroundColor = "#171c2b"
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "#87ceeb";
        document.body.style.color = "black";
    }
}