const xhr = new XMLHttpRequest();
const endPointRoot = "http://localhost:8000/";// TODO: Change localhost to the server's address
const resource = "create/";
class Store {
    createWord(word, definition) {
        xhr.open("POST", endPointRoot + resource, true);
        xhr.setRequestHeader("Content-Type", "text/plain");
        // xhr.send("word=" + word + "&definition=" + definition);
        if (word.length === 0 || definition.length === 0) {
            console.log("Empty input detected.");
            return;
        }
        xhr.send(JSON.stringify({ word: word, definition: definition }));
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                console.log("Response received.")
                document.getElementById("response").innerHTML = xhr.responseText;
            } else {
                console.log("Error: " + xhr.status + " " + xhr.statusText);
            }
        };
        // xhr.onload = function() {
        //     console.log("Response received.")
        //     document.getElementById("response").innerHTML = xhr.responseText;
        // };
        console.log("Word created.");
    }
}

const store = new Store();

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("create-word").addEventListener("click", () => {
        let word = document.getElementById("word").value;
        let definition = document.getElementById("definition").value;
        store.createWord(word, definition);
    });
});

