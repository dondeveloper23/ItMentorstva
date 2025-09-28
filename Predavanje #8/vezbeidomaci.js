/*
let products = document.getElementsByClassName("product");
let productsPrice = document.querySelectorAll(".productPrice");

for(let car of products)
{
    car.style.color = "#616161";

}
for (let price of productsPrice)
{
    if (price.innerText > "1500")
    {
        price.style.color = "red";
    }
}*/

let cars = [
    {
        name: "Audi A3",
        price: 12000,
        year: 2025,
        image: "https://uploads.audi-mediacenter.com/system/production/media/91178/images/1f201fd6f5fcbd78b452dd0ff4907b1cc4dc0a8c/A202506_blog.jpg?1698425163"
    },
    {
        name: "BMW 320d",
        price: 15000,
        year: 2019,
        image: "https://www.greencarguide.co.uk/wp-content/uploads/2019/08/BMW-320d-001-low-res.jpeg"
    },
    {
        name: "Mercedes C200",
        price: 18000,
        year: 2020,
        image: "https://cdn.motor1.com/images/mgl/k3pee/s1/mercedes-c-klasse-limousine-2021.jpg"
    },
    {
        name: "Volkswagen Golf 7",
        price: 10000,
        year: 2017,
        image: "https://csr-automotive.b-cdn.net/media/b6/9b/b2/1755149113/bodykitspoilersettwbfuervwgolf7rbk384-20250814072513-1.jpg?width=1920"
    },
    {
        name: "Toyota Corolla",
        price: 13000,
        year: 2021,
        image: "https://scene7.toyota.eu/is/image/toyotaeurope/COR0001a_25_WEB_CROP:Large-Landscape?ts=0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=png-alpha"
    },
    {
        name: "Ford Focus",
        price: 9000,
        year: 2016,
        image: "https://www.mdautodelovi.rs/wp-content/uploads/2022/09/ford-focus-automobil.jpg.webp"
    },
    {
        name: "Renault Clio",
        price: 7000,
        year: 2015,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Renault_Clio_R.S._Line_%28V%29_%E2%80%93_f_17102021.jpg/1200px-Renault_Clio_R.S._Line_%28V%29_%E2%80%93_f_17102021.jpg"
    },
    {
        name: "Peugeot 308",
        price: 11000,
        year: 2022,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYCjLEg2cNdTT9WckKn-Kqm4bAymBvimLv-A&s"
    }
];

let products = document.getElementById("products");

for (let car of cars) {
    let carDiv = document.createElement("div");
    carDiv.className = "product";

    let carImg = document.createElement("img");
    carImg.src = car.image;
    carImg.setAttribute("width", 300);

    let carParargraph = document.createElement("p");
    carParargraph.innerText = car.name
    let carSpan = document.createElement("span");
    carSpan.className = "carSpan";
    carSpan.innerText = car.price;
    carParargraph.appendChild(carSpan);

    let imgWrapper = document.createElement("div");
    imgWrapper.appendChild(carImg)
    imgWrapper.className = "imgWrapper";

    carDiv.append(carParargraph, imgWrapper);
    products.appendChild(carDiv);

    if (car.year === 2025) {
        let newElement = document.createElement("div");
        newElement.className = "newElement";
        newElement.innerText = "New!";

        imgWrapper.appendChild(newElement);
    }

}

/*
<div class="product">
    <p>${cars[car].name} <span style="color: ${carPrice > 10000 ? "blue" : "red"}">${carPrice} </span></p>
    <img src="${cars[car].image}" alt="${cars[car].name}" width="300">
</div>`*/
