function callNewsAPI(){
    document.getElementById("news-articles").innerHTML = "";
    let searchTerm = document.getElementById("search-term");
    let searchString = `https://newsapi.org/v2/everything?q="${searchTerm.value}"&from=2024-12-25&sortBy=popularity&apiKey=f80b642e2c794a62990e16540c383e30`;
    searchTerm.value !== "" ? 
        fetch(searchString)
        .then(res => res.json())
        .then(data => data.articles.forEach(article => articleToCard(article)))
     : hardcoded.articles.forEach(article => articleToCard(article));
   
    // elementCreator("p", hardcoded.articles[0].source.name);
}

function callNewsAPI2(){
    let searchTerm = document.getElementById("search-term");
    searchTerm.value !== "" ? console.log("content") : console.log("null");
    console.log(searchTerm.value);
}

function elementCreator(elementType, nodeContent, target){
    
    let newElement = document.createElement(elementType);
    let newNode = document.createTextNode(nodeContent);
    newElement.appendChild(newNode);
    target.appendChild(newElement);
    return newElement;
}


function articleToCard(article){
    // author
    // title
    // url
    // urlToImage
    // publishedAt
    // content

    let target = document.getElementById("news-articles");
    let primaryDivTarget = document.createElement("div");
    let divTarget = document.createElement("div");
    let articleImage = document.createElement("img");
    articleImage.src = article.urlToImage;
    primaryDivTarget.appendChild(articleImage);
    elementCreator("h3", article.title, divTarget);
    elementCreator("p", article.author, divTarget);
    elementCreator("p", article.publishedAt, divTarget);
    elementCreator("p", article.content.substring(0, 100), divTarget);
    let newElement = elementCreator("a", article.source.name, divTarget);
    newElement.href=article.url;
    primaryDivTarget.appendChild(divTarget);
    target.appendChild(primaryDivTarget);
}
