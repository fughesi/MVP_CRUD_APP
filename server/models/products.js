import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 3, maxlength: 30 },
  description: { type: String, required: true, minlength: 3, maxlength: 100 },
  price: { type: Number, required: true },
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  brand: String,
  category: String,
  thumbnail: String,
  images: [String],
});

const Products = mongoose.model("Products", productsSchema);

export default Products;
