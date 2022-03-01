const express = require("express");

const { authController } = require("../controllers");

const router = express();

router.post("/login", authController.signin); 

module.exports = router; 