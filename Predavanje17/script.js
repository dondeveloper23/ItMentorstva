let nameInput = document.getElementById("name-input");
let lastNameInput = document.getElementById("lastname-input");
let ageSelect = document.getElementById("age-select");
let infoForm = document.getElementById("info-form");
let formBtn = document.getElementById("submit-button");
let deleteButton = document.createElement("button");
deleteButton.id = 'delete-button';
deleteButton.innerText = 'Delete';
deleteButton.type = 'button';

for (let i = 18; i <= 80; i++) {
    let option = document.createElement("option");
    option.textContent = i;
    ageSelect.appendChild(option);
}

formBtn.addEventListener("click", function(){

    let name = nameInput.value;
    let lastName = lastNameInput.value;
    let age = ageSelect.value;
    if (!name.trim() || !lastName.trim() || !age) {
        alert("Please enter a valid name!");
        return
    }
    register(name, lastName, age);

    infoForm.appendChild(deleteButton);

})


// Funkcija da registrujemo korisnika
function register(name, lastName, age) {
    fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            firstName: name,
            lastName: lastName,
            age: age,
        })
    })
        .then(response => response.json())
    .then(function(data) {
        deleteButton.setAttribute("usersID", data.id);
        alert("Usepsno ste se registrovali sa imenom " + data.firstName)
    })
}

fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        username: 'emilys',
        password: "emilyspass",
        expiresInMins: 30,
    }),

})
.then(response => response.json())
.then(function (data) {
})
// Brisemo usera na klik delete dugmeta
deleteButton.addEventListener("click", function () {
    fetch('https://dummyjson.com/users/' + (deleteButton.getAttribute("usersID")), {
        method: 'DELETE',
    }).then(res => res.json())
        .then(function (data) {
            console.log(data);
            alert("User deleted!")
        })
})