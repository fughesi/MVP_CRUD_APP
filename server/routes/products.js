import express from "express";
import { products } from "../products.js";
import Products from "../models/products.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(products);
});

router.post("/", (req, res) => {
  const prod = req.body;

  const newProd = new Products(prod);

  newProd.save((error) => {
    if (error) {
      res.status(500).console.log(error);
    } else {
      res.send("data received");
    }
  });
});

export default router;
