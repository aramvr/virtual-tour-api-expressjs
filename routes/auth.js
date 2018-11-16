const Joi = require("joi");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const { User } = require("../models/user");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  console.log("login");
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("invalid email or password");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("invalid email or password");

  const token = user.generateAuthToken();

  res.send({
    token
  });
});

module.exports = router;
