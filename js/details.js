const detailsContainer = document.querySelector("article_container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url =
  "https://newsapi.org/v2/top-headlines?country=no&apiKey=97503c2acf464d41b59bd823200e7150/" +
  id;

console.log(url);

async function getNews() {
  try {
    const response = await fetch(url);
    const details = await response.json;
    const news = results.articles;

    console.log(news);

    createHtml(details);
  } catch (error) {
    console.log(error);
    detailsContainer.innerHTML = message("error", error);
  }
}

getNews();

function createHtml(details) {
  detailsContainer.innerHTML = `<div"class="newsbox">
                                      <div>
                                       <h4>${news.title}</h4>
                                       </div>
                                       <div>
                                       <h6>${news.author}</h6>
                                       </div>
                                       <div>
                                       <p class="url">${news.url}</p>
                                       </div>
                                       <div>
                                       <time>${news.publishedAt}</time>
                                       </div>
                                       </div>`;
}
