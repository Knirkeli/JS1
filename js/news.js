const url =
  "https://newsapi.org/v2/top-headlines?country=no&apiKey=97503c2acf464d41b59bd823200e7150";

const resultsContainer = document.querySelector(".norway_news");

async function getNews() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    resultsContainer.innerHTML = "";

    const news = results.articles;

    console.log(news);

    news.forEach(function (news) {
      resultsContainer.innerHTML += `<a href="details.html?id=${news.title} " class="newsbox">
                                      <div>
                                       <h4>${news.title}</h4>
                                       </div>
                                       <div>
                                       <h6>${news.author}</h6>
                                       </div>
                                       <div>
                                       <p class="url">${news.url}</p>
                                       </div>
                                       <div><h7>${news.publishedAt}</h7></div>
                                       </a>`;
    });
  } catch (error) {
    // console.log(error);
    resultsContainer.innerHTML = message("error", error);
  }
}

getNews();
