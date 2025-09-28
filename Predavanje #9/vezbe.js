let cities = ["Beograd", "Novi Sad", "Subotica", "Podgorica", "Vidikovac", "Stari Hrad"]

let citySelect = document.querySelector(".city-select");

for (let city of cities) {
    let cityOption = document.createElement("option");
    cityOption.textContent = city;
    citySelect.appendChild(cityOption);
}

let apartmentType = ["Stan", "Kuca", "Poslovni Prostor", "Parking"];
let apartmentTselect = document.querySelector(".type-select");
for (let apartment of apartmentType) {
    let apartmentOption = document.createElement("option");
    apartmentOption.textContent = apartment;
    apartmentTselect.appendChild(apartmentOption);
}

let roomType = [
    "Garsonjera",
    "Jednosoban stan",
    "Jednoiposoban stan",
    "Dvosoban stan",
    "Dvoiposoban stan",
    "Trosoban stan"
];

let realEstates = [
    {
        city: "Beograd",
        option: "Garsonjera",
        type: "Stan",
        price: 55000
    },
    {
        city: "Novi Sad",
        option: null,
        type: "Kuca",
        price: 72000
    },
    {
        city: "Subotica",
        option: "Jednoiposoban stan",
        type: "Poslovni Prostor",
        price: 89000
    },
    {
        city: "Podgorica",
        option: "Dvosoban stan",
        type: "Parking",
        price: 15000
    },
    {
        city: "Vidikovac",
        option: "Trosoban stan",
        type: "Stan",
        price: 98000
    }
];


let roomSelect = document.querySelector('.room-select');

for (let room of roomType) {
    let roomOption = document.createElement("option");
    roomOption.textContent = room;
    roomSelect.appendChild(roomOption);
}

citySelect.addEventListener("change", (e) => {
    console.log(e.target.value);
})
apartmentTselect.addEventListener("change", (e) => {
    console.log(e.target.value);
})
roomSelect.addEventListener("change", (e) => {
    console.log(e.target.value);
})

document.querySelector("#searchPropertiesButton").addEventListener("click", function (e) {
    let cityTargetValue = citySelect.value;
    let roomSelectValue = roomSelect.value;
    let apartmentValue = apartmentTselect.value;
    console.log(cityTargetValue, apartmentValue, roomSelectValue);
})

let estates = document.querySelector("#estates")

for (let estate of realEstates) {
    let estateCity = document.createElement("h1");
    estateCity.innerText = estate.city + " " + estate.type
    let estateOption = document.createElement("p");
    if (estate.option == null) {
        estateOption.innerText = "--"
    } else {
        estateOption.innerText = estate.option;
    }
    let estatePrice = document.createElement("p");
    estatePrice.innerText = estate.price;

    let estateDiv = document.createElement("div");
    estateDiv.append(estateCity, estateOption,  estatePrice);
    estates.appendChild(estateDiv);
}