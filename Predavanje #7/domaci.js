let ads = [
    {
        title: "Skoda Octavia 2014",
        price: 9950,
        image: "https://cdn.skoda-storyboard.com/2024/02/03_Skoda_Octavia_Combi_51d65db5.jpg",
    },
    {
        title: "Audi A4",
        price: 8000,
        image: "https://www.akkompresor.rs/files/thumbs/files/images/slike_proizvoda/thumbs_1200/WAUZZZ8K0DA000000-audi-a4-3.jpg",
    }
];

let container = document.getElementById("container");

for (let ad in ads) {
    container.innerHTML += `
        <h2>${ads[ad].title}</h2>
        <p>${ads[ad].price}</p>
        <img src="${ads[ad].image}" alt="${ads[ad].title}" width="200" height="200" />
        `

}