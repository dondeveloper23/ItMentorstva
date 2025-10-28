// IMPORTS
import {callSingleArticle} from "./components/guardianApi";

// Getting params
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
//HTML Elements
const articleTitle = document.getElementById("article-title");
const articlePillar = document.getElementById("article-pillar");
const articleImage = document.getElementById("article-image");
const articleContent = document.getElementById("article-content");
const articleByline = document.getElementById("article-byline");
const articleDate = document.getElementById("article-date");

const response = await callSingleArticle(id);

articleTitle.textContent = response.fields.headline;
articlePillar.textContent = response.pillarName;
articleImage.src = response.fields.thumbnail;
articleImage.alt = response.fields.headline;
articleContent.innerHTML = response.fields.body;
articleByline.textContent = response.fields.byline;
articleDate.textContent = new Date(response.webPublicationDate).toLocaleString();









