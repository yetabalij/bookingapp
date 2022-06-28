const express = require("express");
const {
  getRestaurants,
  getBar,
  getSpa,
} = require("./../../controlers/Restaurant/restaurant");

const router = express.Router();

router.get("/restaurant", getRestaurants);
router.get("/bar", getBar);
router.get("/spa", getSpa);

module.exports = router;
