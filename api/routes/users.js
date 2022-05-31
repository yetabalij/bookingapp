const express = require("express");
const {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} = require("./../controlers/user");
//const {verifyToken,verifyUser,verifyAdmin,} = require("./../utils/verityToken");

const router = express.Router();

//UPDATE
router.put("/:id", updateUser);
//DELETE
router.delete("/:id", deleteUser);
//GET
router.get("/:id", getUser);
//GET ALL
router.get("/", getAllUsers);

module.exports = router;
