const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const tourSchema = new mongoose.Schema({
  name: String,
  author: Number,
  description: String,
  location: {
    lat: Number,
    long: Number
  },
  published: Boolean,
  photos: [],
  hotspots: [],
  preview: ObjectId,
  author: ObjectId,
  views: Number
});

const Tour = mongoose.model("Tour", tourSchema);

exports.tourSchema = tourSchema;
exports.Tour = Tour;
