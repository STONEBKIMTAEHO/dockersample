const express = require("express");
const bodyParser = require("body-parser");

const db = request("./db");

const app = express();

app.use(bodyParser.json());

app.listen(5000, () => {
  console.log('gogogo!');
});

