const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const photoSchema = new mongoose.Schema({
  name: String,
  author: ObjectId,
  description: String,
  position: {}
});

const Photo = mongoose.model("Photo", photoSchema);

exports.photoSchema = photoSchema;
exports.Photo = Photo;
