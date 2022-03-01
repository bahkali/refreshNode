const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 3000 || process.env.PORT;
// disable layout
app.set("view options", { layout: false });

//Middelware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use(express.static("public"));

// ROUTES
app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});

//Listener
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}...`);
});
