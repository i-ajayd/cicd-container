const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello Youtube! boom boom boom!"));

app.get("/test", (req, res) => res.send("Hello Youtube 123!"));

app.get("/actions", (req, res) => res.send("this is successful manual process"));

app.get("/v1/actions", (req, res) => res.send("this is successful manual process"));

app.get('/hamro', (req, res) => res.send('Hello Hamro Nepal Ma!'));

app.get('/new_trial1', (req, res) => res.send('Hefdsafsllo Hamro Nepdasgal dsfdMa1!'));


app.get("/health", (req, res) => {
  res.status(200);
  res.send("healthy");
});

app.listen(3000, () => {
  console.log("App listening on port 3000!, retry");
});
