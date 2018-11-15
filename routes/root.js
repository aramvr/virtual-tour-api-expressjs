express = require("express");
router = express.Router();

router.get("/", async (req, res) => {
  res.send({
    version: "1.0.0"
  });
});

module.exports = router;
