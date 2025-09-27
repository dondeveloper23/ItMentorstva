/*
let paragraph = document.getElementById("name")
let username = prompt("Enter your name")
let color = prompt("Enter your color")
let background = prompt("Enter your background")
paragraph.style.background = background;
paragraph.style.color = color;
paragraph.style.fontSize = "60px";
paragraph.innerText = username;*/

let elements = document.getElementsByClassName("description")

for (let e in elements) {
    elements[e].innerText = e
}
