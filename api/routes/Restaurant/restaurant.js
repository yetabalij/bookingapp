const express = require("express");
const {
  getRestaurants,
  getBar,
  getSpa,
  getSauna,
} = require("./../../controlers/Restaurant/restaurant");

const router = express.Router();

router.get("/restaurant", getRestaurants);
router.get("/bar", getBar);
router.get("/spa", getSpa);
router.get("/sauna", getSauna);

module.exports = router;
