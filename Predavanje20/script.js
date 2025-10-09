// Konstante (API, HTMLElements)

// API
const mealDbApi = "https://themealdb.com/api/json/v1/1/";
const data = await getMealDBData("categories.php")
const cocktailsApi = "https://thecocktaildb.com/api/json/v1/1/"
// HTML Elements
const foodSelect = document.getElementById("food-select");
const mealWrapper = document.getElementById("meal-wrapper");
const mealImage = document.querySelector(".meal-image");
const mealPopup = document.getElementById("meal-popup");
const recipeText = document.getElementById("recipe-text");
const closePopup = document.getElementById("close-popup");
const randomCocktail = document.getElementById("random-cocktail")


appendCategories(data.categories)

// Funkcije

// Dodaj option element po imenu kategorije

function appendCategories(categoriesList) {
    for (const category of categoriesList) {
        let foodOption = document.createElement("option");
        foodOption.value = category.strCategory;
        foodOption.textContent = category.strCategory;
        foodSelect.appendChild(foodOption);
    }
}

// Napravi div za svaki meal iz array-a

function createMealDivs (mealList) {
    for (let meal of mealList) {
        let mealDiv = document.createElement("div");
        mealDiv.classList.add("meal-div");
        let mealTitle = document.createElement("h3");
        mealTitle.textContent = meal.strMeal;
        let mealImg = document.createElement("img");
        mealImg.src = meal.strMealThumb;
        mealImg.width = "300";
        mealImg.classList.add("meal-img");

        mealDiv.append(mealTitle, mealImg);
        mealWrapper.append(mealDiv);
        mealDiv.addEventListener("click", async () => {
            let recipe = await getMealDBData("lookup.php?i=" + meal.idMeal)
            let cocktail = await getRandomCocktail()
            mealPopup.style.display = "flex";
            recipeText.innerText = recipe.meals[0].strInstructions
            randomCocktail.innerText = "Reccomended cocktail: " + cocktail
        })
    }
}

async function getRandomCocktail() {
    let cocktail = await getCocktailDBData("random.php")
    return await cocktail.drinks[0].strDrink

}


async function getCocktailDBData (endpoint) {
    let response = await fetch(cocktailsApi+endpoint);
    return await response.json();
}


async function getMealDBData (endpoint) {
    let response = await fetch(mealDbApi+endpoint);
    return await response.json();
}

// Event listeneri

foodSelect.addEventListener("change", async (e) => {
    mealWrapper.innerHTML = "";
    let mealsCategory = e.target.value;

    const mealsData = await getMealDBData(`filter.php?c=${mealsCategory}`)
    createMealDivs(mealsData.meals)
})

closePopup.addEventListener("click",  () => {
    mealPopup.style.display = "none";
})


