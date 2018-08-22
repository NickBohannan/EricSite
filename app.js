const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const Item = require('./models/index.js')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("/index.html");
});

app.get("/modify.html", (req, res) => {
  res.sendFile("/modify.html");
});

app.post("/modify.html", async (req, res) => {
  Item.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    wood: req.body.wood
  }).then(() => {
    res.end();
  }).catch(error => {
    console.log(error);
  })
});

// app.get("*", (req, res) => {
//   res.send("Ah, ah, ah, you didn't say the magic word.");
// });

app.listen(4500, () => console.log("Server listening on port 4500..."));

module.exports = app;
