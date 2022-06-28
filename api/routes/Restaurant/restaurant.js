const express = require("express");
const {
  getRestaurants,
  getBar,
} = require("./../../controlers/Restaurant/restaurant");

const router = express.Router();

router.get("/restaurant", getRestaurants);
router.get("/bar", getBar);

module.exports = router;
