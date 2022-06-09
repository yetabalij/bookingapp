const express = require("express");
const {
  searchHotels,
  propertyType,
  propertyByCity,
} = require("../../controlers/hotelsControler/queries");

const router = express.Router();

router.post("/search", searchHotels);
router.get("/propertyType", propertyType);
router.get("/propertybycity", propertyByCity);

module.exports = router;
