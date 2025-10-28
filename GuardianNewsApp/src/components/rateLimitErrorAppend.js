export const rateLimitErrorAppend = () => {
    const resultsWrapper = document.getElementById("results-wrapper");
    resultsWrapper.innerHTML = `
    <div class="error-wrapper">
      <h3>You have reached limit of requests</h3>
      <p>Try later</p>
      <button id="retry-button">Retry</button>
    </div>
  `;
    const retryButton = document.getElementById("retry-button");
    retryButton.addEventListener("click", () => {
        window.location.reload();
    });
};
