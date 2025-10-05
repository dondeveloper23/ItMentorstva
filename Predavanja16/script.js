let recipesDiv = document.querySelector('#recipes');
let selectHolder = document.querySelector('#select');
let params = new URLSearchParams(window.location.search);
if (params.get("category")) {
    console.log(params.get("category"));
    let apiUrl = 'https://dummyjson.com/recipes/tag/' + params.get("category");
    fetch(apiUrl).then(res => res.json())
        .then(function(data){
            recipesDiv.innerHTML = '';
            for (let recipe of data.recipes){
                appendCookingRecipe(recipe);
            }
        })
}

fetch('https://dummyjson.com/recipes?limit=9&sortBy=name&order=asc')
.then(res => res.json())
.then(data =>{
    for (let recipe of data.recipes){
    appendCookingRecipe(recipe);
    }
})
fetch('https://dummyjson.com/recipes/tags')
    .then(res => res.json())
    .then(data =>{
            appendOption(data)
    })

selectHolder.addEventListener('change', function(){
    let apiUrl = 'https://dummyjson.com/recipes/tag/' + this.value;
    fetch(apiUrl).then(res => res.json())
    .then(function(data){
        recipesDiv.innerHTML = '';
        for (let recipe of data.recipes){
            appendCookingRecipe(recipe);
        }
    })
})

function appendOption (optionArr) {
    for (let tag of optionArr) {
        let tagOption = document.createElement('option');
        tagOption.textContent = tag;
        tagOption.value = tag;
        selectHolder.appendChild(tagOption);
        }
}
function buildInstructionsElement(instructions) {
    let recipeInstruction = document.createElement('ul');
    for (let instruction of instructions) {
        let instructionStep = document.createElement('li');
        instructionStep.textContent = instruction;
        recipeInstruction.appendChild(instructionStep);
    }
    return recipeInstruction;
}

function appendCookingRecipe(recipe) {
    let recipeInstruction = buildInstructionsElement(recipe.instructions)
    let recipeHolder = document.createElement('div');
    let recipeTitle = document.createElement('h2');
    recipeTitle.textContent = recipe.name;
    let recipeCuisine = document.createElement('p');
    recipeCuisine.textContent = recipe.cuisine;


    let permaLinkElement = document.createElement('a');
    permaLinkElement.innerText = "Show recipe"
    permaLinkElement.href = "permalink.html?id="+recipe.id;
    recipeHolder.append(recipeTitle, recipeCuisine, recipeInstruction, permaLinkElement);
    recipesDiv.appendChild(recipeHolder);
}