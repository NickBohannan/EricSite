const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");


app.use(morgan("dev"));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("/index.html");
});

app.get("*", (req, res) => {
  res.send("Ah, ah, ah, you didn't say the magic word.");
});

app.listen(4500, () => console.log("Server listening on port 4500"));

module.exports = app;
