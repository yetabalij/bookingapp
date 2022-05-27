const express = require("express");
const {
  partnerRegister,
  partnerLogin,
} = require("./../../controlers/Partners/auth");

const router = express.Router();

router.post("/partnerregister", partnerRegister);
router.post("/partnerlogin", partnerLogin);

module.exports = router;
