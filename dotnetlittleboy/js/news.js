//alert("body loaded");
var newsResultJSON = null;
var categoryName = null;
var newsFeedNode = null; //document.getElementById('newsFeeds');
var newsBusinessNode = null,
    newsSportsNode = null,
    newsGeneralNode = null,
    newsScienceNode = null,
    newsTechnologyNode = null,
    newsHealthNode = null,
    newsEntertainmentNode = null;
var isNewsSearch = false;
var newsDefaultNode = null;
var newsFeedContainer = document.getElementById('newsFeedContainer');
var topHeadlines = "https://newsapi.org/v2/top-headlines?country=in&language=en&apiKey=be167aaa10c64796a6a36823468d2f67";
var newsByCategory = 'https://newsapi.org/v2/top-headlines?country=de&language=en&category=' + categoryName + '&apiKey=be167aaa10c64796a6a36823468d2f67';
var newsEverything = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=be167aaa10c64796a6a36823468d2f67';

window.onload = function() {
    url = "https://newsapi.org/v2/top-headlines?country=in&language=en&apiKey=be167aaa10c64796a6a36823468d2f67";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var result = JSON.parse(xhr.responseText);
                handleTopNews(result);
            } else {

            }
        }
    }
}


//fetch(topHeadlines).then(handleTopNews).catch((error) => { document.getElementById('newsFeedContainer').innerHTML = error.message; });

function handleTopNews(newsResponse) {

    newsResultJSON = newsResponse.json();
    if (categoryName == null || isNewsSearch == true) {
        if (isNewsSearch == true) {
            if (newsDefaultNode != null) {
                newsDefaultNode.remove();
                newsDefaultNode = null;
            }
        }
        if (newsDefaultNode == null) {
            newsDefaultNode = document.createElement('a');
            newsDefaultNode.id = 'newsFeeds';
            newsDefaultNode.hidden = false;
        } else {
            newsDefaultNode = document.getElementById('newsFeeds');
            newsDefaultNode.hidden = false;
        }

        if (document.getElementById('newsBusinessFeeds') != null || document.getElementById('newsBusinessFeeds') != undefined) {
            document.getElementById('newsBusinessFeeds').hidden = true;
            document.getElementById('newsBusinessFeeds').style.display = 'none';
        } else if (document.getElementById('newsSportsFeeds') != null || document.getElementById('newsSportsFeeds') != undefined) {
            document.getElementById('newsSportsFeeds').hidden = true;
            document.getElementById('newsSportsFeeds').style.display = 'none';
        } else if (document.getElementById('newsGeneralFeeds') != null || document.getElementById('newsGeneralFeeds') != undefined) {
            document.getElementById('newsGeneralFeeds').hidden = true;
            document.getElementById('newsGeneralFeeds').style.display = 'none';
        } else if (document.getElementById('newsScieneFeeds') != null || document.getElementById('newsScieneFeeds') != undefined) {
            document.getElementById('newsScieneFeeds').hidden = true;
            document.getElementById('newsScieneFeeds').style.display = 'none';
        } else if (document.getElementById('newsEntertainmentFeeds') != null || document.getElementById('newsEntertainmentFeeds') != undefined) {
            document.getElementById('newsEntertainmentFeeds').hidden = true;
            document.getElementById('newsEntertainmentFeeds').style.display = 'none';
        } else if (document.getElementById('newsHealthFeeds') != null || document.getElementById('newsHealthFeeds') != undefined) {
            document.getElementById('newsHealthFeeds').hidden = true;
            document.getElementById('newsHealthFeeds').style.display = 'none';
        } else if (document.getElementById('newsTechnologyFeeds') != null || document.getElementById('newsTechnologyFeeds') != undefined) {
            document.getElementById('newsTechnologyFeeds').hidden = true;
            document.getElementById('newsTechnologyFeeds').style.display = 'none';
        }
        newsFeedContainer.appendChild(newsDefaultNode);
        newsFeedNode = newsDefaultNode;
    } else if (categoryName == 'business') {
        if (newsBusinessNode == null) {
            newsBusinessNode = document.createElement('a'); //('newsBusinessFeeds');
            newsBusinessNode.id = 'newsBusinessFeeds';
            newsBusinessNode.hidden = false;
            newsBusinessNode.style.display = 'block';
        } else {
            newsBusinessNode = document.getElementById('newsBusinessFeeds');
            newsBusinessNode.hidden = false;
            newsBusinessNode.style.display = 'block';
        }
        if (document.getElementById('newsSportsFeeds') != null || document.getElementById('newsSportsFeeds') != undefined) {
            document.getElementById('newsSportsFeeds').hidden = true;
            document.getElementById('newsSportsFeeds').style.display = 'none';
            document.getElementById('newsSportsFeeds').remove();
        } else if (document.getElementById('newsGeneralFeeds') != null || document.getElementById('newsGeneralFeeds') != undefined) {
            document.getElementById('newsGeneralFeeds').hidden = true;
            document.getElementById('newsGeneralFeeds').style.display = 'none';
        } else if (document.getElementById('newsScieneFeeds') != null || document.getElementById('newsScieneFeeds') != undefined) {
            document.getElementById('newsScieneFeeds').hidden = true;
            document.getElementById('newsScieneFeeds').style.display = 'none';
        } else if (document.getElementById('newsEntertainmentFeeds') != null || document.getElementById('newsEntertainmentFeeds') != undefined) {
            document.getElementById('newsEntertainmentFeeds').hidden = true;
            document.getElementById('newsEntertainmentFeeds').style.display = 'none';
        } else if (document.getElementById('newsHealthFeeds') != null || document.getElementById('newsHealthFeeds') != undefined) {
            document.getElementById('newsHealthFeeds').hidden = true;
            document.getElementById('newsHealthFeeds').style.display = 'none';
        } else if (document.getElementById('newsFeeds') != null || document.getElementById('newsFeeds') != undefined) {
            document.getElementById('newsFeeds').hidden = true;
            document.getElementById('newsFeeds').style.display = 'none';
            document.getElementById('newsFeeds').remove();
        } else if (document.getElementById('newsTechnologyFeeds') != null || document.getElementById('newsTechnologyFeeds') != undefined) {
            document.getElementById('newsTechnologyFeeds').hidden = true;
            document.getElementById('newsTechnologyFeeds').style.display = 'none';
        }

        newsFeedContainer.appendChild(newsBusinessNode);
        newsFeedNode = newsBusinessNode;
    } else if (categoryName == 'sports') {
        if (newsSportsNode == null) {
            newsSportsNode = document.createElement('a');
            newsSportsNode.id = 'newsSportsFeeds';
            newsSportsNode.hidden = false;
            newsSportsNode.style.display = 'block';
        } else {
            newsSportsNode = document.getElementById('newsSportsFeeds');
            newsSportsNode.hidden = false;
            newsSportsNode.style.display = 'block';
        }

        if (document.getElementById('newsBusinessFeeds') != null || document.getElementById('newsBusinessFeeds') != undefined) {
            document.getElementById('newsBusinessFeeds').hidden = true;
            document.getElementById('newsBusinessFeeds').style.display = 'none';
            document.getElementById('newsBusinessFeeds').remove();
        } else if (document.getElementById('newsGeneralFeeds') != null || document.getElementById('newsGeneralFeeds') != undefined) {
            document.getElementById('newsGeneralFeeds').hidden = true;
            document.getElementById('newsGeneralFeeds').style.display = 'none';
            document.getElementById('newsGeneralFeeds').remove();
        } else if (document.getElementById('newsScieneFeeds') != null || document.getElementById('newsScieneFeeds') != undefined) {
            document.getElementById('newsScieneFeeds').hidden = true;
            document.getElementById('newsScieneFeeds').style.display = 'none';
            document.getElementById('newsScieneFeeds').remove();
        } else if (document.getElementById('newsEntertainmentFeeds') != null || document.getElementById('newsEntertainmentFeeds') != undefined) {
            document.getElementById('newsEntertainmentFeeds').hidden = true;
            document.getElementById('newsEntertainmentFeeds').style.display = 'none';
            document.getElementById('newsEntertainmentFeeds').remove();
        } else if (document.getElementById('newsHealthFeeds') != null || document.getElementById('newsHealthFeeds') != undefined) {
            document.getElementById('newsHealthFeeds').hidden = true;
            document.getElementById('newsHealthFeeds').style.display = 'none';
            document.getElementById('newsHealthFeeds').remove();
        } else if (document.getElementById('newsFeeds') != null || document.getElementById('newsFeeds') != undefined) {
            document.getElementById('newsFeeds').hidden = true;
            document.getElementById('newsFeeds').style.display = 'none';
            document.getElementById('newsFeeds').remove();
        } else if (document.getElementById('newsTechnologyFeeds') != null || document.getElementById('newsTechnologyFeeds') != undefined) {
            document.getElementById('newsTechnologyFeeds').hidden = true;
            document.getElementById('newsTechnologyFeeds').style.display = 'none';
            document.getElementById('newsTechnologyFeeds').remove();
        }

        newsFeedContainer.appendChild(newsSportsNode);
        newsFeedNode = newsSportsNode;
    } else if (categoryName == 'general') {
        if (newsGeneralNode == null) {
            newsGeneralNode = document.createElement('a');
            newsGeneralNode.id = 'newsGeneralFeeds';
            newsGeneralNode.hidden = false;
            newsGeneralNode.style.display = 'block';
        } else {
            newsGeneralNode = document.getElementById('newsGeneralFeeds');
            newsGeneralNode.hidden = false;
            newsGeneralNode.style.display = 'block';
        }

        if (document.getElementById('newsBusinessFeeds') != null || document.getElementById('newsBusinessFeeds') != undefined) {
            document.getElementById('newsBusinessFeeds').hidden = true;
            document.getElementById('newsBusinessFeeds').style.display = 'none';
            document.getElementById('newsBusinessFeeds').remove();
        } else if (document.getElementById('newsSportsFeeds') != null || document.getElementById('newsSportsFeeds') != undefined) {
            document.getElementById('newsSportsFeeds').hidden = true;
            document.getElementById('newsSportsFeeds').style.display = 'none';
            document.getElementById('newsSportsFeeds').remove();
        } else if (document.getElementById('newsScieneFeeds') != null || document.getElementById('newsScieneFeeds') != undefined) {
            document.getElementById('newsScieneFeeds').hidden = true;
            document.getElementById('newsScieneFeeds').style.display = 'none';
            document.getElementById('newsScieneFeeds').remove();
        } else if (document.getElementById('newsEntertainmentFeeds') != null || document.getElementById('newsEntertainmentFeeds') != undefined) {
            document.getElementById('newsEntertainmentFeeds').hidden = true;
            document.getElementById('newsEntertainmentFeeds').style.display = 'none';
            document.getElementById('newsEntertainmentFeeds').remove();
        } else if (document.getElementById('newsHealthFeeds') != null || document.getElementById('newsHealthFeeds') != undefined) {
            document.getElementById('newsHealthFeeds').hidden = true;
            document.getElementById('newsHealthFeeds').style.display = 'none';
            document.getElementById('newsHealthFeeds').remove();
        } else if (document.getElementById('newsFeeds') != null || document.getElementById('newsFeeds') != undefined) {
            document.getElementById('newsFeeds').hidden = true;
            document.getElementById('newsFeeds').style.display = 'none';
            document.getElementById('newsFeeds').remove();
        } else if (document.getElementById('newsTechnologyFeeds') != null || document.getElementById('newsTechnologyFeeds') != undefined) {
            document.getElementById('newsTechnologyFeeds').hidden = true;
            document.getElementById('newsTechnologyFeeds').style.display = 'none';
            document.getElementById('newsTechnologyFeeds').remove();
        }

        newsFeedContainer.appendChild(newsGeneralNode);
        newsFeedNode = newsGeneralNode;

    } else if (categoryName == 'science') {
        if (newsScienceNode == null) {
            newsScienceNode = document.createElement('a');
            newsScienceNode.id = 'newsScieneFeeds';
            newsScienceNode.hidden = false;
            newsScienceNode.style.display = 'block';
        } else {
            newsScienceNode = document.getElementById('newsScieneFeeds');
            newsScienceNode.hidden = false;
            newsScienceNode.style.display = 'block';
        }

        if (document.getElementById('newsBusinessFeeds') != null || document.getElementById('newsBusinessFeeds') != undefined) {
            document.getElementById('newsBusinessFeeds').hidden = true;
            document.getElementById('newsBusinessFeeds').style.display = 'none';
            document.getElementById('newsBusinessFeeds').remove();
        } else if (document.getElementById('newsSportsFeeds') != null || document.getElementById('newsSportsFeeds') != undefined) {
            document.getElementById('newsSportsFeeds').hidden = true;
            document.getElementById('newsSportsFeeds').style.display = 'none';
            document.getElementById('newsSportsFeeds').remove();
        } else if (document.getElementById('newsGeneralFeeds') != null || document.getElementById('newsGeneralFeeds') != undefined) {
            document.getElementById('newsGeneralFeeds').hidden = true;
            document.getElementById('newsGeneralFeeds').style.display = 'none';
            document.getElementById('newsGeneralFeeds').remove();
        } else if (document.getElementById('newsEntertainmentFeeds') != null || document.getElementById('newsEntertainmentFeeds') != undefined) {
            document.getElementById('newsEntertainmentFeeds').hidden = true;
            document.getElementById('newsEntertainmentFeeds').style.display = 'none';
            document.getElementById('newsEntertainmentFeeds').remove();
        } else if (document.getElementById('newsHealthFeeds') != null || document.getElementById('newsHealthFeeds') != undefined) {
            document.getElementById('newsHealthFeeds').hidden = true;
            document.getElementById('newsHealthFeeds').style.display = 'none';
            document.getElementById('newsHealthFeeds').remove();
        } else if (document.getElementById('newsFeeds') != null || document.getElementById('newsFeeds') != undefined) {
            document.getElementById('newsFeeds').hidden = true;
            document.getElementById('newsFeeds').style.display = 'none';
            document.getElementById('newsFeeds').remove();
        } else if (document.getElementById('newsTechnologyFeeds') != null || document.getElementById('newsTechnologyFeeds') != undefined) {
            document.getElementById('newsTechnologyFeeds').hidden = true;
            document.getElementById('newsTechnologyFeeds').style.display = 'none';
            document.getElementById('newsTechnologyFeeds').remove();
        }
        newsFeedContainer.appendChild(newsScienceNode);
        newsFeedNode = newsScienceNode;

    } else if (categoryName == 'entertainment') {
        if (newsEntertainmentNode == null) {
            newsEntertainmentNode = document.createElement('a');
            newsEntertainmentNode.id = 'newsEntertainmentFeeds';
            newsEntertainmentNode.hidden = false;
            newsEntertainmentNode.style.display = 'block';
        } else {
            newsEntertainmentNode = document.getElementById('newsEntertainmentFeeds');
            newsEntertainmentNode.hidden = false;
            newsEntertainmentNode.style.display = 'block';
        }
        if (document.getElementById('newsBusinessFeeds') != null || document.getElementById('newsBusinessFeeds') != undefined) {
            document.getElementById('newsBusinessFeeds').hidden = true;
            document.getElementById('newsBusinessFeeds').style.display = 'none';
            document.getElementById('newsBusinessFeeds').remove();
        } else if (document.getElementById('newsSportsFeeds') != null || document.getElementById('newsSportsFeeds') != undefined) {
            document.getElementById('newsSportsFeeds').hidden = true;
            document.getElementById('newsSportsFeeds').style.display = 'none';
            document.getElementById('newsSportsFeeds').remove();
        } else if (document.getElementById('newsGeneralFeeds') != null || document.getElementById('newsGeneralFeeds') != undefined) {
            document.getElementById('newsGeneralFeeds').hidden = true;
            document.getElementById('newsGeneralFeeds').style.display = 'none';
            document.getElementById('newsGeneralFeeds').remove();
        } else if (document.getElementById('newsScieneFeeds') != null || document.getElementById('newsScieneFeeds') != undefined) {
            document.getElementById('newsScieneFeeds').hidden = true;
            document.getElementById('newsScieneFeeds').style.display = 'none';
            document.getElementById('newsScieneFeeds').remove();
        } else if (document.getElementById('newsHealthFeeds') != null || document.getElementById('newsHealthFeeds') != undefined) {
            document.getElementById('newsHealthFeeds').hidden = true;
            document.getElementById('newsHealthFeeds').style.display = 'none';
            document.getElementById('newsHealthFeeds').remove();
        } else if (document.getElementById('newsFeeds') != null || document.getElementById('newsFeeds') != undefined) {
            document.getElementById('newsFeeds').hidden = true;
            document.getElementById('newsFeeds').style.display = 'none';
            document.getElementById('newsFeeds').remove();
        } else if (document.getElementById('newsTechnologyFeeds') != null || document.getElementById('newsTechnologyFeeds') != undefined) {
            document.getElementById('newsTechnologyFeeds').hidden = true;
            document.getElementById('newsTechnologyFeeds').style.display = 'none';
            document.getElementById('newsTechnologyFeeds').remove();
        }
        newsFeedContainer.appendChild(newsEntertainmentNode);
        newsFeedNode = newsEntertainmentNode;

    } else if (categoryName == 'health') {
        if (newsHealthNode == null) {
            newsHealthNode = document.createElement('a');
            newsHealthNode.id = 'newsHealthFeeds';
            newsHealthNode.hidden = false;
            newsHealthNode.style.display = 'block';
        } else {
            newsHealthNode = document.getElementById('newsHealthFeeds');
            newsHealthNode.hidden = false;
            newsHealthNode.style.display = 'block';
        }

        if (document.getElementById('newsBusinessFeeds') != null || document.getElementById('newsBusinessFeeds') != undefined) {
            document.getElementById('newsBusinessFeeds').hidden = true;
            document.getElementById('newsBusinessFeeds').style.display = 'none';
            document.getElementById('newsBusinessFeeds').remove();
        } else if (document.getElementById('newsSportsFeeds') != null || document.getElementById('newsSportsFeeds') != undefined) {
            document.getElementById('newsSportsFeeds').hidden = true;
            document.getElementById('newsSportsFeeds').style.display = 'none';
            document.getElementById('newsSportsFeeds').remove();
        } else if (document.getElementById('newsGeneralFeeds') != null || document.getElementById('newsGeneralFeeds') != undefined) {
            document.getElementById('newsGeneralFeeds').hidden = true;
            document.getElementById('newsGeneralFeeds').style.display = 'none';
            document.getElementById('newsGeneralFeeds').remove();
        } else if (document.getElementById('newsScieneFeeds') != null || document.getElementById('newsScieneFeeds') != undefined) {
            document.getElementById('newsScieneFeeds').hidden = true;
            document.getElementById('newsScieneFeeds').style.display = 'none';
            document.getElementById('newsScieneFeeds').remove();
        } else if (document.getElementById('newsEntertainmentFeeds') != null || document.getElementById('newsEntertainmentFeeds') != undefined) {
            document.getElementById('newsEntertainmentFeeds').hidden = true;
            document.getElementById('newsnewsEntertainmentFeedsFeeds').style.display = 'none';
            document.getElementById('newsnewsEntertainmentFeedsFeeds').remove();
        } else if (document.getElementById('newsFeeds') != null || document.getElementById('newsFeeds') != undefined) {
            document.getElementById('newsFeeds').hidden = true;
            document.getElementById('newsFeeds').style.display = 'none';
            document.getElementById('newsFeeds').remove();
        } else if (document.getElementById('newsTechnologyFeeds') != null || document.getElementById('newsTechnologyFeeds') != undefined) {
            document.getElementById('newsTechnologyFeeds').hidden = true;
            document.getElementById('newsTechnologyFeeds').style.display = 'none';
            document.getElementById('newsTechnologyFeeds').remove();
        }
        newsFeedContainer.appendChild(newsHealthNode);
        newsFeedNode = newsHealthNode;
    } else if (categoryName == 'technology') {
        if (newsTechnologyNode == null) {
            newsTechnologyNode = document.createElement('a');
            newsTechnologyNode.id = 'newsTechnologyFeeds';
            newsTechnologyNode.hidden = false;
            newsTechnologyNode.style.display = 'block';
        } else {
            newsTechnologyNode = document.getElementById('newsTechnologyFeeds');
            newsTechnologyNode.hidden = false;
            newsTechnologyNode.style.display = 'block';
        }
        if (document.getElementById('newsBusinessFeeds') != null || document.getElementById('newsBusinessFeeds') != undefined) {
            document.getElementById('newsBusinessFeeds').hidden = true;
            document.getElementById('newsBusinessFeeds').style.display = 'none';
            document.getElementById('newsBusinessFeeds').remove();
        } else if (document.getElementById('newsSportsFeeds') != null || document.getElementById('newsSportsFeeds') != undefined) {
            document.getElementById('newsSportsFeeds').hidden = true;
            document.getElementById('newsSportsFeeds').style.display = 'none';
            document.getElementById('newsSportsFeeds').remove();
        } else if (document.getElementById('newsGeneralFeeds') != null || document.getElementById('newsGeneralFeeds') != undefined) {
            document.getElementById('newsGeneralFeeds').hidden = true;
            document.getElementById('newsGeneralFeeds').style.display = 'none';
            document.getElementById('newsGeneralFeeds').remove();
        } else if (document.getElementById('newsScieneFeeds') != null || document.getElementById('newsScieneFeeds') != undefined) {
            document.getElementById('newsScieneFeeds').hidden = true;
            document.getElementById('newsScieneFeeds').style.display = 'none';
            document.getElementById('newsScieneFeeds').remove();
        } else if (document.getElementById('newsEntertainmentFeeds') != null || document.getElementById('newsEntertainmentFeeds') != undefined) {
            document.getElementById('newsEntertainmentFeeds').hidden = true;
            document.getElementById('newsEntertainmentFeeds').style.display = 'none';
            document.getElementById('newsEntertainmentFeeds').remove();
        } else if (document.getElementById('newsFeeds') != null || document.getElementById('newsFeeds') != undefined) {
            document.getElementById('newsFeeds').hidden = true;
            document.getElementById('newsFeeds').style.display = 'none';
            document.getElementById('newsFeeds').remove();
        }
        newsFeedContainer.appendChild(newsTechnologyNode);
        newsFeedNode = newsTechnologyNode;
    }

    newsResultJSON.then((jsonResponse) => {
        if (jsonResponse.status == 'error') {
            document.getElementById('newsFeedContainer').innerHTML = jsonResponse.message;
            return;
        }
        for (let i = 0; i < jsonResponse.articles.length; i++) {
            //Node to contain each news feed.
            let divNewsFeedContainer = document.createElement('div');

            //node to add title of news.
            let newsTitle = document.createElement('h3');
            newsTitle.className += 'post-title';
            newsTitle.innerHTML = jsonResponse.articles[i].title;
            divNewsFeedContainer.appendChild(newsTitle);

            //news to add contents.
            let newsContent = document.createElement('p');
            newsContent.innerHTML = jsonResponse.articles[i].content;
            let readMoreLink = document.createElement('a');
            readMoreLink.href = jsonResponse.articles[i].url;
            readMoreLink.innerText = "Read More...";
            newsContent.appendChild(readMoreLink);
            divNewsFeedContainer.appendChild(newsContent);

            //Add Image of news feed
            let newsImage = document.createElement('img');
            let urlToImage = jsonResponse.articles[i].urlToImage;
            if (urlToImage == null || urlToImage.length === 0) {
                newsImage.src = '';
            } else {
                newsImage.src = urlToImage;
            }
            newsImage.width = 500;
            newsImage.height = 300;
            divNewsFeedContainer.appendChild(newsImage);

            //News Publisher details
            let newsPublishedBy = document.createElement('p');
            let authorName = jsonResponse.articles[i].author;
            let postedAt = jsonResponse.articles[i].publishedAt;
            if (authorName == null || authorName.length === 0) {
                authorName = "Unknown";
            }
            newsPublishedBy.className += 'post-meta';
            newsPublishedBy.innerHTML = 'Posted by: <b>' + jsonResponse.articles[i].source.name + '</b> | Author: ' + authorName + ' | Posted At: ' + postedAt + '<hr/>';
            divNewsFeedContainer.appendChild(newsPublishedBy);
            newsFeedNode.appendChild(divNewsFeedContainer);
        }
    })
}

function categoryNews(category) {
    categoryName = category;
    if (categoryName != null) {
        newsByCategory = 'https://newsapi.org/v2/top-headlines?country=in&language=en&category=' + categoryName + '&apiKey=be167aaa10c64796a6a36823468d2f67';
        fetch(newsByCategory).then(handleTopNews).catch((error) => { document.getElementById('newsFeeds').innerHTML = error.message; });
    }
    console.log(category + ' news');
}

function searchNews(e) {
    if (e.keyCode == 13) {
        let searchText = document.getElementById('searchInput').value;
        if (searchText != null && searchText.length != 0) {
            isNewsSearch = true;
            newsEverything = newsEverything = 'https://newsapi.org/v2/everything?q=' + searchText + '&apiKey=be167aaa10c64796a6a36823468d2f67';
            fetch(newsEverything).then(handleTopNews).catch((error) => { document.getElementById('newsFeeds').innerHTML = error.message; });
        }
        console.log(searchText);
    }
}

function newsEverythingHandler(newsResponse) {


}