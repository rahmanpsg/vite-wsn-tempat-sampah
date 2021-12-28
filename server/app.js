require("./mqtt").connect();
const express = require("express");

const app = express();

app.use(express.static("./dist/"));

app.get("/", (req, res) => {
  res.sendFile(__dirname, "./dist/index.html");
});

module.exports = app;
