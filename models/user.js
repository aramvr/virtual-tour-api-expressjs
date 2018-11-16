const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");
const Joi = require("joi");

const userSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
      minlength: 3,
      maxlength: 50
    },
    lastname: {
      required: true,
      type: String,
      minlength: 3,
      maxlength: 50
    },

    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 1024
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"]
    },
    account_type: {
      type: String,
      default: "free",
      enum: ["free", "pro"]
    },
    comfirmed: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign(
    { _id: this._id, role: this.role },
    config.get("jwtPrivateKey"),
    { expiresIn: "2h" }
  );
  return token;
};
userSchema.methods.generateEmailToken = function() {
  const token = jwt.sign({ _id: this._id }, config.get("emailSecret"), {
    expiresIn: "2d"
  });
  return token;
};

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = {
    name: Joi.string()
      .min(3)
      .max(50)
      .required(),
    lastname: Joi.string()
      .min(3)
      .max(50)
      .required(),
    email: Joi.string()
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
  };
  return Joi.validate(user, schema);
}
exports.userSchema = userSchema;
exports.User = User;
exports.validate = validateUser;
