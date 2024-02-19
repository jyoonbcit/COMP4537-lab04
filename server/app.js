const http = require('http');
const url = require('url');
const message = require("../user.js");

let dictionary = {};
let requestCount = 0;
http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    res.writeHead(200, {
        "Content-Type": "text/html",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST"
    })
    requestCount++;
    if (req.method === "GET") {
        // TODO: Replace hardcoded strings
        console.log(`Search received: ${q.query.word}`);
        res.end("Response from server received.");
    } else if (req.method === "POST") {
        // TODO: Replace console.log
        console.log("POST request received.");
        // let body = "";
        let word = q.query.word;
        let definition = q.query.definition;
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            // let q = url.parse(body, true);
            res.end(`${word}: ${definition}`);
        });
        if (word in dictionary) {
            res.end(`${message.warning}.replace(%s, ${word})`);
            // TODO: Replace response
            //res.end("Word already exists in dictionary.");
        } else {
            dictionary.push(`${word}: ${definition}`)
            res.end(`${message.count}.replace(%s, ${requestCount})` + `${message.success}.replace(%s, %t, ${word}, ${definition})`);
        }
    }
}).listen(8000);