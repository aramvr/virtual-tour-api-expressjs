const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");

const userSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  email: String,
  password: String,
  role: ["author", "admin"],
  account_type: ["free", "pro"]
});

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign(
    { _id: this._id, role: this.role },
    config.get("jwtPrivateKey")
  );
  return token;
};

const User = mongoose.model("User", userSchema);

exports.userSchema = userSchema;
exports.User = User;
