import express from "express";
import Joi from "joi";
import path from "path";
import { products } from "../products.js";
import Products from "../models/products.js";

const router = express.Router();

router.get("/", async (req, res) => {
  let products = await Products.find();

  res.send(products);
});

router.get("/pic", (req, res) => {
  // let options = {
  //   root: path.join(__dirname),
  // };
  // let products = await Products.find();
  // res.download("./routes/monkey.png");
  // res.sendFile("./resources/monkey.png", options);
});

router.post("/", async (req, res) => {
  const schema = Joi.object({
    title: Joi.string().required().min(3).max(30),
    description: Joi.string().required().min(3).max(100),
    price: Joi.number().required(),
    discountPercentage: Joi.number(),
    rating: Joi.number(),
    stock: Joi.number(),
    brand: Joi.string(),
    category: Joi.string(),
    thumbnail: Joi.string(),
    images: Joi.array(),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error?.details[0]?.message);

  let product = new Products({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    discountPercentage: req.body.discountPercentage,
    rating: req.body.rating,
    stock: req.body.stock,
    brand: req.body.brand,
    category: req.body.category,
    thumbnail: req.body.thumbnail,
    images: req.body.images,
  });

  try {
    product = await product.save();

    // res.send( "all good in the hood" ),
    res.format({
      "application/json": () => send({ message: "all good in the hood" }),
    });
  } catch (error) {
    console.log(`ERROR loading product: ${error}`);
    res.send(error?.message);
  }
});

export default router;
