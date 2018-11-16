const mongoose = require("mongoose");

module.exports = function() {
  mongoose
    .connect("mongodb://localhost/vr")
    .then(() => console.log("Connected to db"));
};
