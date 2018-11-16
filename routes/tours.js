express = require("express");
const { Tour } = require("../models/tour");
router = express.Router();
const _ = require("lodash");
const auth = require("../middleware/auth");

router.get("/", async (req, res) => {
  const tours = await Tour.find().sort("name");
  res.send(tours);
});

router.post("/", auth, async (req, res) => {
  let tour = new Tour(
    _.pick(req.body, [
      "name",
      "description",
      "location",
      "published",
      "photos",
      "hotspots"
    ])
  );

  tour = await tour.save();
  res.send(tour);
});

module.exports = router;
