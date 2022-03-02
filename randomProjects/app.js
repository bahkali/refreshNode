// const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log(req);
// });

// server.listen(3000);

const express = require("express");
const app = express();
const PORT = 3500;

// Routes
app.get("/", (req, res, next) => {
  console.log("Hello World!!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
