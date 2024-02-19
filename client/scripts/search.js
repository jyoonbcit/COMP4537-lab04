const xhr = new XMLHttpRequest();
const endPointRoot = "http://localhost:8000/";// TODO: Change localhost to the server's address
const resource = "search/";
class Search {
    getResults(query) {
        let params = "?word=" + query;
        const url = endPointRoot + resource + params
        xhr.open("GET", url, true);
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                this.displayResults(JSON.parse(xhr.responseText));
            } else {
                console.log("Error: " + xhr.status + " " + xhr.statusText);
            }
        };
    }

    displayResults(results) {
        document.getElementById("response-word").innerHTML = results.word;
        document.getElementById("response-definition").innerHTML = results.definition;
    }
}

const search = new Search();

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("search").addEventListener("input", () => {
        // TODO: Input validation
        search.getResults(document.getElementById("search").value);
    });
});

