const express = require("express");
const {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getAllHotel,
} = require("./../controlers/hotel");
const { verifyToken, verifyAdmin } = require("./../utils/verityToken");

const router = express.Router();

//CREATE
router.post("/", verifyToken, verifyAdmin, createHotel);
//UPDATE
router.put("/:id", verifyToken, verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyToken, verifyAdmin, deleteHotel);
//GET
router.get("/:id", getHotel);
//GET ALL
router.get("/", getAllHotel);

module.exports = router;
