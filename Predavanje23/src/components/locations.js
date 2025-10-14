export function getUserLocation() {
    let userLocation = ''
    while(userLocation.trim() === "") {
        userLocation = prompt("Enter your location: ");
    }
    return userLocation;
}