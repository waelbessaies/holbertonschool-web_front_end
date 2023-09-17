function createElement(data) {
    let paragraph = document.createElement('p');
    paragraph.appendChild(document.createTextNode(data));
    document.body.append(paragraph);
}

function queryWikipedia(callback) {
    let xmlhttprequest = new XMLHttpRequest();
    xmlhttprequest.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=');
    xmlhttprequest.onload = function () {
        let data = JSON.parse(xmlhttprequest.responseText);
        let extract = data.query.pages[Object.keys(data.query.pages)[0]].extract;
        callback(extract);
    }
    xmlhttprequest.send();
};
queryWikipedia(createElement);