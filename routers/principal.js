const express = require("express");
const controller = require("../controllers/principal");

const router= express.Router();

router.get("/", controller.inicio);

module.exports = router;