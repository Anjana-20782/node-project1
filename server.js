const http = require("http");
const fs = require("fs");
const path = require("path");
const EventEmitter = require("events");

const signupEvent = new EventEmitter();

signupEvent.on("userSignup", (user) => {
    console.log("\nSIGNUP EVENT");
    console.log("Name :", user.name);
    console.log("Email:", user.email);
    console.log("Password:", user.password);
});

const viewsDir = path.join(__dirname, "views");
const publicDir = path.join(__dirname, "public");

function serveView(file, res) {
    fs.readFile(path.join(viewsDir, file), (err, data) => {
        if (err) return res.end("Page missing");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}



server.listen(3000, () => {
    console.log("\nServer running at http://localhost:3000");
});