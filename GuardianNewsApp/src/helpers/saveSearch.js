import { savedSearchAppend } from "../components/categoryAppend";
const savedSearchSelect = document.getElementById("saved-search-select");
export const saveSearch = (params, savedParams) => {

  const exists = savedParams.some(savedParam =>
          savedParam.q === params.q &&
          savedParam.section === params.section &&
          savedParam.fromDate === params.fromDate &&
          savedParam.toDate === params.toDate &&
          savedParam.sortSelect === params.sortSelect
      );
      if (!exists) {

          savedParams.push(params)
          localStorage.setItem("saved-params", JSON.stringify(savedParams));
          savedSearchSelect.innerHTML = ""
          savedSearchAppend(savedParams, savedSearchSelect)

      } else {
          alert("You already have this search!")
      }
}
