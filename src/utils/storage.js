const articles = [];

export function saveViewedArticle(article) {
  articles.push(article);
  window.localStorage.setItem("viewed_article", JSON.stringify(articles));
}

export function getViewedArticles() {
  return JSON.parse(localStorage.getItem("viewed_article")) || [];
}
