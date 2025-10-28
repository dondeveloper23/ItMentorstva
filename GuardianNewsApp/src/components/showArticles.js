import {isSaved} from "./bookmarkCheck";
import {isSavedLogic} from "./bookmarkCheck";
let bookmarkArticles = JSON.parse(localStorage.getItem("bookmark-articles")) || [];

export const showArticles = (articles, el) => {
    for (let article of articles) {
        const articleElement = document.createElement("div");
        articleElement.classList.add("article-div");

        const articleThumbnail = document.createElement("img");
        articleThumbnail.src = article.fields.thumbnail;

        const articleTitle = document.createElement("h3");
        articleTitle.textContent = article.webTitle;

        const articleByline = document.createElement("p");
        if (article.fields.byline) {
            articleByline.textContent = article.fields.byline
        } else {
            articleByline.textContent = "No Byline"
        }

        const articleDate = document.createElement("p");
        articleDate.innerText = article.webPublicationDate.split("T")[0].trim()
        
        const articleSave = document.createElement("div")
        isSaved(articleSave, article)

        articleSave.addEventListener("click", (e) => {
            e.stopPropagation();
            isSavedLogic(articleSave, article);
        });

        articleElement.append(articleThumbnail, articleTitle, articleByline, articleDate, articleSave);
        articleElement.addEventListener("click", (e) => {
            window.location.href = `article.html?id=${article.id}`;
        })
        el.appendChild(articleElement);
    }
}

