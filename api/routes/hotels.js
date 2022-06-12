const express = require("express");
const {
  createHotel,
  propertyByPartner,
  updateHotel,
  deleteHotel,
  getHotel,
  getAllHotel,
} = require("./../controlers/hotelsControler/hotel");
//const { example } = require("./../controlers/hotelsControler/queries");
const { verifyToken, verifPartner } = require("./../utils/verityToken");

const router = express.Router();

//CREATE
router.post("/createhotel", verifyToken, createHotel);
//PROPERTY BY PARTNER
router.post("/propertybypartner", propertyByPartner);
//UPDATE
router.put("/:id", updateHotel);
//DELETE
router.delete("/:id", deleteHotel);
//GET
router.get("/:id", getHotel);
//GET ALL
router.get("/", getAllHotel);

//example
//router.get("/example", example);

module.exports = router;
