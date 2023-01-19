const express = require("express");
const cors = require("cors");
const products = require("./products");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.get("/products", (req, res) => {
  res.send(products);
});

const Port = 5650;

app.listen(Port || 5001, console.log(`Server is running on Port: ${Port}`));
