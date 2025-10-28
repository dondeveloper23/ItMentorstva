# 📰 Guardian News App

A single-page web application for browsing and searching news articles using **The Guardian Open Platform API**, built entirely with **Vanilla JavaScript** and bundled with **Webpack**.

It supports **keyword search**, **section/category filters**, **date range filtering**, **sorting**, **saved searches**, and **bookmarked articles** — all stored locally with `LocalStorage`.

---

## ✨ Features

### 🔍 Search
- Search The Guardian articles by keyword
- Displays results as clean article cards (title, thumbnail, byline, publication date)
- Clicking on a card opens a detailed article page

### 🎚️ Filters
- **Category (section)** — e.g. technology, sport, business, science, world
- **Date range** — from/to date pickers
- **Sort order** — newest / oldest / relevance

### 💾 Saved Searches
- Save any search combination (keyword + category + date + order)
- Saved searches appear in a dropdown list
- Each saved search can be reloaded or deleted

### ⭐ Bookmarks
- “Save Article” button toggles article bookmarks
- Bookmarked articles are persisted in `LocalStorage`
- Accessible via the “Check Bookmarks” section

### ⚠️ Error & Status Handling
- “No results found” message for empty searches
- Retry button on network errors
- Rate-limit message when API returns **HTTP 429**

---

## 🧱 Project Structure

src/
┣ components/
┃ ┣ bookmarkCheck.js
┃ ┣ categoryAppend.js
┃ ┣ getParams.js
┃ ┣ guardianApi.js
┃ ┣ rateLimitErrorAppend.js
┃ ┗ showArticles.js
┣ helpers/
┃ ┣ article.js
┃ ┗ index.js
┣ styles/
┃ ┣ article.css
┃ ┗ styles.css
pages/
┣ index.html
┗ article.html


---

## 🧩 Tech Stack

- **Vanilla JavaScript (ES6 modules)**
- **Webpack** for bundling & minification
- **Axios** for HTTP requests
- **LocalStorage API** for persistence
- **The Guardian Open Platform API**



