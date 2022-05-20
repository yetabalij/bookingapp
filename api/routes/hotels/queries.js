const express = require("express");
const { searchHotels } = require("../../controlers/hotelsControler/queries");

const router = express.Router();

router.post("/search", searchHotels);

module.exports = router;
