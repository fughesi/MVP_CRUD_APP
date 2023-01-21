const express = require("express");
const cors = require("cors");
const products = require("./products");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const register = require("./routes/register");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/register", register);

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.get("/products", (req, res) => {
  res.send(products);
});

const Port = process.env.PORT || 5651;

const connectionString = process.env.MONGODB;

app.listen(Port, console.log(`Server is running on Port: ${Port}`));

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB conn successful"))
  .catch((error) => {
    console.log(`Conn to DB failed, ${error?.message}`);
  });

mongoose.set("strictQuery", false);
