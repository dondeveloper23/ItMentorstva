const categorySelect = document.getElementById("category-select");
const fromDate = document.getElementById("from-date");
const toDate = document.getElementById("to-date");
const sortSelect = document.getElementById("sort-select");
const searchInput = document.getElementById("search-input");


export const getParams = () => {
    return {
        q: searchInput.value || null,
        section: categorySelect.value ? categorySelect.value.toLowerCase() : null,
        fromDate: fromDate.value || null,
        toDate: toDate.value || null,
        sortSelect: sortSelect.value ? sortSelect.value.toLowerCase() : "newest",
        page: 1,
    };

}


