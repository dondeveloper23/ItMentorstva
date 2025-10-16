import {setLocation} from "../script";
import {getGeoLocationForCords} from "../components/openweatheApi";


export async function checkLocation () {
    if (!navigator.geolocation) {
        alert("Geolocation is not supported");
    }
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition( async (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            let coords = await getGeoLocationForCords(lat, lng)
            let cityName = coords.data[0]["name"]
            if (cityName.includes("Municipality")) {
                cityName = cityName.replace("Municipality", "").trim();
            }
            setLocation(cityName)
            resolve(cityName)
        })
    })

}