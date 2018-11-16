const express = require("express");
const tours = require("./routes/tours");
const users = require("./routes/users");
const auth = require("./routes/auth");
const root = require("./routes/root");
const verifyUser = require("./routes/verifyUser");
module.exports = function(app) {
  router = express.Router();

  app.use(express.json());

  app.use("/api/", root);
  app.use("/api/users", users);
  app.use("/api/auth", auth);
  app.use("/api/tours", tours);
  app.use("/api/verifyemail", verifyUser);
};
