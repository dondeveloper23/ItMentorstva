// HTML Elementi

const logInButton = document.getElementById("login-button");
const logOutButton = document.getElementById("logout-button");
const logInForm = document.getElementById("login-form");
const loggedData = document.getElementById("logged-data")
const username = document.getElementById("user-input")
const password = document.getElementById("pw-input")

//Local Storage
const loggedIn = localStorage.getItem("loggedIn");

if (loggedIn === null) {
    logInForm.style.display = "block";
} else {
    loggedData.style.display = "block";
}

// Event listeneri
logOutButton.addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    window.location.reload();
})

logInButton.addEventListener("click", () => {
    if (username.value.toLowerCase() !== "admin" || password.value !== "123456") {
        return alert("Please enter a valid username and password.")
    }
    localStorage.setItem("loggedIn", true)
    window.location.reload();
})

