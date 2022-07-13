const express = require("express");
const app = express();
const http = require("http").Server(app);
const path = require("path");

const port = process.env.PORT || 3000;

const stattic_path = path.join(__dirname, "/public");

app.use(express.static(stattic_path));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

http.listen(port, () => console.log("listening on port " + port));
