/*
* Ajax, Axios, Fetch, postReq, XHR
*
* FETCH
* CORS
* Cross Origin Resource Sharing
*      => Izvor - odakle pozivamo API
*
* */
/*Moje resenje:*/

let products = document.querySelector("#products");
let searchButton = document.querySelector("#searchButton");
let searchInput = document.querySelector("#searchInput");

function search(query) {
    products.innerHTML = "";
    fetch(`https://dummyjson.com/products/search?q=${query}`)
    .then(function (response){
        return response.json();
    })
        .then(function (data) {
            for (let product of data.products) {
                appendProductToElement(product)
            }
    })
}

searchButton.addEventListener("click", function() {
    let query = searchInput.value;
    search(query)
});

let response = fetch('https://dummyjson.com/products/')
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        for (let product of data.products) {
            appendProductToElement(product)

        }
    })

function appendProductToElement (product) {
    let productTitle = document.createElement("h2");
    let productCategory = document.createElement("p");
    let productPrice = document.createElement("p");
    productTitle.textContent = product.title;
    productCategory.textContent = product.category;
    productPrice.textContent = product.price;
    products.append(productTitle);
    products.append(productCategory, productPrice);
}




