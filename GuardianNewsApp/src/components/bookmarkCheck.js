let bookmarkArticles = JSON.parse(localStorage.getItem("bookmark-articles")) || [];

export const isSaved = (el, article) => {
    if (bookmarkArticles.includes(article.id)) {
        el.innerText = "Article Saved";
        el.classList.add("saved-article");
    } else {
        el.innerText = "Save Article";
        el.classList.add("not-saved-article");
    }
}

export const isSavedLogic = (el, article) => {
    if (bookmarkArticles.includes(article.id)) {
        bookmarkArticles = bookmarkArticles.filter((id) => id !== article.id);
        localStorage.setItem("bookmark-articles", JSON.stringify(bookmarkArticles));
        el.classList.remove("saved-article");
        el.classList.add("not-saved-article");
        el.innerText = "Save Article";
    } else {
        bookmarkArticles.push(article.id);
        localStorage.setItem("bookmark-articles", JSON.stringify(bookmarkArticles));
        el.classList.remove("not-saved-article");
        el.classList.add("saved-article");
        el.innerText = "Article Saved";
    }
}