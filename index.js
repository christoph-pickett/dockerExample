const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World asdasdasdada!");
});

app.get("/test", (req, res) => {
  res.send("something else");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
