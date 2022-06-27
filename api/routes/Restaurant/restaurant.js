const express = require("express");
const { getRestaurants } = require("./../../controlers/Restaurant/restaurant");

const router = express.Router();

router.get("/restaurant", getRestaurants);

module.exports = router;
