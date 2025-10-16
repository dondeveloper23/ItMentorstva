import {getUserLocation} from "./components/locations";
import {getCurrentWeatherForLocation, getDaysWeatherForLocation, getWeatherInFuture} from "./components/weatherApi";
import {getDateInFuture} from "./helpers/datehelper";
import {elementAppend} from "./components/elementAppend";
import {checkLocation} from "./helpers/checklocation";
import {isNight} from "./components/isNight";

// HTML Elements
const changeButton = document.querySelector("#change-button");
const sevenTempDiv = document.getElementById("seven-temp-div");
const threeTempDiv = document.getElementById("three-temp-div");
const thirtyTempDiv = document.getElementById("thirty-temp-div");
const myLocationBtn = document.getElementById("my-location-btn");
const headerWrapper = document.getElementById("header-wrapper");

// App
let location = localStorage.getItem("location") || getUserLocation();
setLocation(location)

await app(location)


// Event listeners
changeButton.addEventListener("click", async () => {
    let newLocation = getUserLocation()
    setLocation(newLocation)
    await app(newLocation)


})
myLocationBtn.addEventListener("click",  async () => {
    let location = await checkLocation();
    await app(location);
})




// Functions
export function setLocation(newLocation) {
    location = newLocation;
    localStorage.setItem("location", newLocation);
}

async function  app(location) {
    await elementAppend(threeTempDiv, location, 3);
    await elementAppend(sevenTempDiv, location, 7);
    await elementAppend(thirtyTempDiv, location, 30);
    await isNight(location)
    createHeader(location)
}

function createHeader (location) {
    headerWrapper.innerHTML = ''
    let header = document.createElement("h1");
    header.innerText = location.toUpperCase();
    headerWrapper.appendChild(header);
}