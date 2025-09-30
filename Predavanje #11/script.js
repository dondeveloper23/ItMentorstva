/*
function sayHello() {
    console.log(" Hello World!");
}
sayHello();*/


/*
function online() {
    console.log("Sajt je online")
}

online();

function isAdult(age) {
    if (age > 18) {
        console.log("Person is adult")
    } else {
        console.log("Person is not adult")
    }
}*/

function add(num1, num2) {
    console.log(num1 + num2);
}

function stringLength(string) {
    console.log(string.length);
}

function isEven(num) {
    if (num % 2 === 0) {
        console.log(true, "isEven");
    }
}

function isCapital(string) {
    if (string[0] === string[0].toUpperCase()) {
        console.log(true, "isCapital");
    } else {
       let fixed = string[0].toUpperCase() + string.slice(1);
       console.log(fixed);
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

