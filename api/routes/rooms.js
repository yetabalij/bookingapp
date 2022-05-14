const express = require("express");
const {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getAllRoom,
} = require("./../controlers/room");
const { verifyToken, verifyAdmin } = require("./../utils/verityToken");

const router = express.Router();

//CREATE
router.post("/:hotelid", verifyToken, verifyAdmin, createRoom);
//UPDATE
router.put("/:id", verifyToken, verifyAdmin, updateRoom);
//DELETE
router.delete("/:id/:hotelid", verifyToken, verifyAdmin, deleteRoom);
//GET
router.get("/:id", getRoom);
//GET ALL
router.get("/", getAllRoom);

module.exports = router;
