const express = require("express");
const {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getAllRoom,
} = require("./../controlers/room");
//const { verifyToken, verifyAdmin } = require("./../utils/verityToken");

const router = express.Router();

//CREATE
router.post("/create", createRoom);
//UPDATE
router.put("/:id", updateRoom);
//DELETE
router.delete("/:id/:hotelid", deleteRoom);
//GET
router.get("/:id", getRoom);
//GET ALL
router.get("/", getAllRoom);

module.exports = router;
