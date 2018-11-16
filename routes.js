const express = require("express");
const tours = require("./routes/tours");
const users = require("./routes/users");
const root = require("./routes/root");
module.exports = function(app) {
  router = express.Router();

  app.use(express.json());

  app.use("/api/", root);
  app.use("/api/tours", tours);
  app.use("/api/users", tours);
};
