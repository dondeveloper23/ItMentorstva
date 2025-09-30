let cities = ["Svi", "Beograd", "Novi Sad", "Subotica", "Podgorica", "Vidikovac", "Stari Hrad"]

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

let citySelect = document.querySelector(".city-select");

for (let city of cities) {
    let cityOption = document.createElement("option");
    cityOption.innerHTML = city;

    let cityFound = false;
    let cityCount = 0;
    for (let estate of realEstates) {
        if(estate.city === city) {
            cityFound = true;
            cityCount++;

        }
    }
    if (city === "Svi") {
        cityCount = realEstates.length;
    }

    cityOption.innerHTML += ` (${cityCount})`
    cityOption.value = city
    citySelect.appendChild(cityOption);



    if (!cityFound && city !== "Svi") {
        cityOption.setAttribute("disabled", "true");
    }
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




let roomSelect = document.querySelector('.room-select');

for (let room of roomType) {
    let roomOption = document.createElement("option");
    roomOption.textContent = room;
    roomSelect.appendChild(roomOption);
}
let currentCity = null;
let currentRoom = null;
let currentType = null;

citySelect.addEventListener("change", (e) => {
    currentCity = e.target.value;
    let allEstates =  document.querySelectorAll(".realEstate");

    for (let realEstate of allEstates) {

        let estateCity = realEstate.querySelector(".city").textContent;
        realEstate.classList.remove("hidden");
        if (estateCity !== currentCity && currentCity !== "Svi") {
            realEstate.classList.add("hidden");
        }

    }
})
apartmentTselect.addEventListener("change", (e) => {
    currentType = e.target.value;
})
roomSelect.addEventListener("change", (e) => {
    currentRoom = e.target.value;
})

let estates = document.querySelector("#estates")

for (let estate of realEstates) {
    let estateCity = document.createElement("h1");
    estateCity.innerText = estate.city
    estateCity.classList = "city"
    let estateOption = document.createElement("p");
    if (estate.option == null) {
        estateOption.innerText = "--"
    } else {
        estateOption.innerText = estate.option;
    }
    let estatePrice = document.createElement("p");
    estatePrice.innerText = estate.price;

    let estateDiv = document.createElement("div");
    estateDiv.classList = "realEstate";
    estateDiv.append(estateCity, estateOption,  estatePrice);
    estates.appendChild(estateDiv);
}