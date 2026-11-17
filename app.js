const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("A");
  next();
  console.log("B");
});

app.get("/", (req, res) => {
  console.log("C");
  res.send("Hello");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
