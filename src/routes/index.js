const express = require("express");
const router = express.Router();
const indexR = require("../index.js");

router.get("/", indexR.renderIndex);
router.post("/", indexR.postData);

module.exports = router