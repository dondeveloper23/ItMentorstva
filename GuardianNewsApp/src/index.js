// IMPORTS
import {showArticles} from "./components/showArticles";
import {callGuardianApi, callSingleArticle} from "./components/guardianApi";
import {callGuardianApiSections} from "./components/guardianApi";
import {categoryAppend} from "./components/categoryAppend";
import {getParams} from "./components/getParams";
import {savedSearchAppend} from "./components/categoryAppend";
import { saveSearch } from "./helpers/saveSearch";

//HTML ELEMENTS
const searchButton = document.getElementById("search-button");
const resultsWrapper = document.getElementById("results-wrapper");
const categorySelect = document.getElementById("category-select");
const loadMoreButton = document.getElementById("load-more-button");
const saveSearchButton = document.getElementById("save-search-button");
const savedSearchSelect = document.getElementById("saved-search-select");
const searchButtonSaved = document.getElementById("search-button-saved");
const bookmarksButton = document.getElementById("bookmarks-button");
const deleteSearchButton = document.getElementById("delete-search-button");

// Global Variables
let savedSearchCount = 2
let count = 2
let savedParams = JSON.parse(localStorage.getItem("saved-params")) || [];
let currentSearchParams = {};
let bookmarkArticles = JSON.parse(localStorage.getItem("bookmark-articles")) || [];
// Event listeners

searchButton.addEventListener("click", async () => {

    currentSearchParams = getParams();
    const articles = await callGuardianApi(currentSearchParams);
    if (articles.length > 0) {
        appReRender()
    }
    showArticles(articles, resultsWrapper);
    count = 2
    
});

loadMoreButton.addEventListener("click", async () => {
    console.log(currentSearchParams)
    let params = currentSearchParams;
    params.page = count
    const articles = await callGuardianApi(params);
    showArticles(articles, resultsWrapper);
    count++


})

saveSearchButton.addEventListener("click", async () => {
    let params = getParams();
    saveSearch(params, savedParams);

})

searchButtonSaved.addEventListener("click", async () => {
    const selectedOption = savedSearchSelect.options[savedSearchSelect.selectedIndex];
    currentSearchParams = JSON.parse(selectedOption.dataset.params);
    const articles = await callGuardianApi(currentSearchParams);
    appReRender()
    showArticles(articles, resultsWrapper)
    console.log(currentSearchParams)
})

bookmarksButton.addEventListener("click", async () => {
    let bookmarkArticles = JSON.parse(localStorage.getItem("bookmark-articles"))
    if (bookmarkArticles.length < 1) {
        alert("No bookmarks found!")
        return;
    }

    resultsWrapper.innerHTML = "";
    loadMoreButton.style.display = "none";
    let bookmarkedArticles = []
    for (let article of bookmarkArticles) {
        let response = await callSingleArticle(article);
        bookmarkedArticles.push(response);
    }
    showArticles(bookmarkedArticles, resultsWrapper);
})

deleteSearchButton.addEventListener("click",  () => {
    const selectedIndex = savedSearchSelect.selectedIndex;
    if (selectedIndex >= 0) {
        savedParams.splice(selectedIndex, 1);
        localStorage.setItem("saved-params", JSON.stringify(savedParams));
        savedSearchSelect.innerHTML = "";
        savedSearchAppend(savedParams, savedSearchSelect);
    }
})

// APP
savedSearchAppend(savedParams, savedSearchSelect)
const categoryResponse = await callGuardianApiSections();
categoryAppend(categoryResponse, categorySelect);
let defaultParams = getParams();
let articles = await callGuardianApi(defaultParams);
showArticles(articles, resultsWrapper);
loadMoreButton.style.display = "block";

const appReRender = () => {
  resultsWrapper.innerHTML = "";
  loadMoreButton.style.display = "block";
}



