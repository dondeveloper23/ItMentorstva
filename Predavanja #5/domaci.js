let cars = ["bmw", "audi", "mercedes", "porsche", "volkswagen"];
console.log(cars.length);
for (let i = 0; i < cars.length; i++) {
    if (cars[i][0].toLowerCase() === "a"){
        continue;
    }
    console.log(cars[i]);
}