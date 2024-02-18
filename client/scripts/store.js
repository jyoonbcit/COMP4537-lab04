class Store {
    createWord(word, definition) {
        xhr.open("POST", "http://localhost:8000", true);
        xhr.setRequestHeader("Content-Type", "text/plain");
        // xhr.send("word=" + word + "&definition=" + definition);
        xhr.send(JSON.stringify({word: word, definition: definition}));
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                console.log("Response received.")
                document.getElementById("response").innerHTML = xhr.responseText;
            }
        };
        // xhr.onload = function() {
        //     console.log("Response received.")
        //     document.getElementById("response").innerHTML = xhr.responseText;
        // };
        console.log("Word created.");
    }
}

const xhr = new XMLHttpRequest();
const store = new Store();

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("create-word").addEventListener("click", () => {
        let word = document.getElementById("word").value;
        let definition = document.getElementById("definition").value;
        store.createWord(word, definition);
    });
});

export default Store;