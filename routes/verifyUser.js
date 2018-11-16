const express = require("express");
const router = express.Router();
const config = require("config");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");

router.get("/:token", async (req, res) => {
  const token = req.params.token;

  try {
    const decoded = jwt.verify(token, config.get("emailSecret"));
    const verified = await User.findOneAndUpdate(
      decoded.id,
      {
        comfirmed: true
      },
      { new: true }
    );

    if (!verified) return res.status(400).send("Invalid token");
    res.send(true);
  } catch (ex) {
    res.status(400).send("Invalid token");
  }
});

module.exports = router;
