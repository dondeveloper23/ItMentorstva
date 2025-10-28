export const categoryAppend = (categoryList, el) => {
    for (let category of categoryList) {
        let option = document.createElement("option");
        option.value = category.webTitle;
        option.innerText = category.webTitle;
        el.appendChild(option);
    }
}

export const savedSearchAppend = (savedParams, el) => {
    for (let save of savedParams) {
        let option = document.createElement("option");
        option.setAttribute("data-params", JSON.stringify(save));
        option.innerText =
            `${save.q ? "Search: " + save.q + " ": ""}` +
            `${save.section ? "Section: " + save.section + " " : ""}` +
            `${save.fromDate ? "From: " + save.fromDate + " " : ""}` +
            `${save.toDate ? "To: " + save.toDate + " ": ""}` +
            `${save.sortSelect ? "Sort: " + save.sortSelect + " ": ""}`;
        el.appendChild(option);
    }
}