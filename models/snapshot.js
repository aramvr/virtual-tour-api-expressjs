const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const snapshotSchema = new mongoose.Schema({
  name: String,
  photo: ObjectId,
  author: ObjectId
});

const Snapshot = mongoose.model("Snapshot", snapshotSchema);

exports.snapshotSchema = snapshotSchema;
exports.Snapshot = Snapshot;
