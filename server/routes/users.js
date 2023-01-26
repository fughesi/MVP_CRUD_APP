import express from "express";
import bcrypt from "bcrypt";
import Joi from "joi";
import { User } from "../models/user.js";
import authToken from "../utils/authToken.js";

const router = express.Router();

router.get("/", async (req, res) => {
  let user = await User.find();
  res.send(user);
});

router.get("/:id", async (req, res, next) => {
  await User.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).end();
      }
      return res.status(200).send(data);
    })
    .catch((err) => next(err));
});

router.post("/register", async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(3).max(200).required().email(),
    password: Joi.string().min(6).max(200).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error?.details[0]?.message);

  let user = await User.findOne({ email: req.body.email });

  if (user) return res.status(400).send("User already exists");

  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  const salt = await bcrypt.genSalt(10);

  user.password = await bcrypt.hash(user.password, salt);

  user = await user.save();

  const token = authToken(user);

  res.send(token);
});

router.delete("/:id", async (req, res) => {
  const person = await User.findByIdAndDelete(req.params.id); // Kyle says not to use this method because no validation

  if (person) {
    res.status(200).send(`${person?.name} deleted`);
  } else {
    res.status(400).send("this person doesn't exist you fucking moron");
  }
});

export default router;
