import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
// import path from "node:path";

import userRoutes from "./routes/users.js";
import productRoutes from "./routes/products.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.get("/", (req, res) => {
  // let thing = path.join(__dirname, "public", "index.html");

  res.send("HOME PAGE");
});

const Port = process.env.PORT || 5651;

const connectionString = process.env.MONGODB;

app.listen(Port, console.log(`Server is running on Port: ${Port}`));

mongoose
  .set("strictQuery", false)
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB conn successful"))
  .catch((error) => {
    console.log(`Conn to DB failed, ${error?.message}`);
  });
