let params = new URLSearchParams(window.location.search);
let selectHolder = document.querySelector('#select');
let recipeID = params.get("id");
let recipeElement = document.getElementById("recipe");

fetch("https://dummyjson.com/recipes/" + recipeID).then(response => response.json())
.then(function (data) {
    let recipeName = document.createElement("h1");
    recipeName.textContent = data.name;
    recipeElement.append(recipeName)
})

fetch('https://dummyjson.com/recipes/tags')
    .then(res => res.json())
    .then(data =>{
        appendOption(data)
    })

function appendOption (optionArr) {
    for (let tag of optionArr) {
        let tagOption = document.createElement('option');
        tagOption.textContent = tag;
        tagOption.value = tag;
        selectHolder.appendChild(tagOption);
    }
}

selectHolder.addEventListener('change', function(){
  window.location.href = "index.html?category="+selectHolder.value;
})
