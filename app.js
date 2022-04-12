const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello Youtube!"));

app.get("/test", (req, res) => res.send("Hello Youtube 123!"));

app.get("/health", (req, res) => {
  res.status(200);
  res.send("healthy");
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
