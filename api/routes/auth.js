const express = require("express");
const { register, login } = require("../controlers/auth");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;
