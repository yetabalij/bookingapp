const express = require("express");
const {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getAllRoom,
  getAllRoomsByProperty,
} = require("./../controlers/room");
//const { verifyToken, verifyAdmin } = require("./../utils/verityToken");

const router = express.Router();

//CREATE
router.post("/create", createRoom);
//UPDATE
router.put("/:id", updateRoom);
//DELETE
router.delete("/delete/:id", deleteRoom);
//GET
router.get("/:id", getRoom);
//GET ALL
router.get("/", getAllRoom);
// GET ALL ROOMS BY PROPERTY
router.get("/roomsbyproperty/:propertyId", getAllRoomsByProperty);

module.exports = router;
