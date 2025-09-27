let grade = prompt("What is  your grade?");

if (grade > 90) {
    console.log("Excellent");
} else if(grade > 75 ) {
    console.log("Good");
} else if (grade > 50) {
    console.log("Average")
} else {
    console.log("Fail");
}


let list = prompt("Enter your articles").split(",")
for (let item in list) {
    console.log(item)
    switch (item) {
        case "milk":
            alert("Buy Milk!")
            break
        case "bread":
            alert("Buy Bread!")
            break
    }
}
console.log(list)

let weather = prompt("What weather is like today?").toLowerCase();
if (weather === "sunny") {
    console.log("Put your sunglasses on!")
} else if (weather === "rainy") {
    console.log("Take umbrella with you!")
} else if (weather === "snow") {
    console.log("Put your jacket on!")
} else {
    console.log("Enter valid weather!")
}

let colors = prompt("What are your favorite colors?").toLowerCase().split(",");

for (let color of colors) {
    switch (color) {
        case "red":
            console.log("Red is vibrant");
            break;
        case "green":
            console.log("Green is calm");
            break;
        case "yellow":
            console.log("Yellow is happy");
            break
    }
}

let userName = prompt("What is your name?");

if (userName.length < 5) {
    console.log(`Hello, ${userName}`);
} else {
    console.log(`Welcome to the user ${userName}`);
}
