const express = require("express");
const {
  searchHotels,
  propertyType,
} = require("../../controlers/hotelsControler/queries");

const router = express.Router();

router.post("/search", searchHotels);
router.get("/propertyType", propertyType);

module.exports = router;
