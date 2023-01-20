const express = require("express");
const cors = require("cors");
const products = require("./products");
const dotenv = require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.get("/products", (req, res) => {
  res.send(products);
});

const Port = process.env.PORT || 5651;

app.listen(Port, console.log(`Server is running on Port: ${Port}`));
