const endPointRoot = "https://comp-4537-lab04.vercel.app/";// TODO: Change localhost to the server's address
const resource = "search/";
class Search {
    getResults(query) {
        let params = "?word=" + query;
        const url = endPointRoot + resources + params
        // TODO: Change localhost to the server's address
        xhr.open("GET", url, true);
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                return this.displayResults(xhr.responseText);
            }
        };
    }

    displayResults(results) {
        document.getElementById("response").innerHTML = results;
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