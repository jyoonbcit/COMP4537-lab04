class Search {
    getResults(query) {
        // TODO: Change localhost to the server's address
        xhr.open("GET", "http://localhost:8000", true);
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                return this.displayResults(xhr.responseText);
            }
        };
    }

    displayResults(results) {
        document.getElementById("response-word").innerHTML = results.word;
        document.getElementById("response-definition").innerHTML = results.definition;
    }
}

const xhr = new XMLHttpRequest();
const search = new Search();

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("search").addEventListener("input", () => {
        // TODO: Input validation
        search.getResults(document.getElementById("search").value);
    });
});

export default Search;