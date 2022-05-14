const express = require("express");
const {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} = require("./../controlers/user");
const {
  verifyToken,
  verifyUser,
  verifyAdmin,
} = require("./../utils/verityToken");

const router = express.Router();

//UPDATE
router.put("/:id", verifyToken, verifyUser, updateUser);
//DELETE
router.delete("/:id", verifyToken, verifyUser, deleteUser);
//GET
router.get("/:id", verifyToken, verifyUser, getUser);
//GET ALL
router.get("/", verifyToken, verifyAdmin, getAllUsers);

module.exports = router;
