const express = require("express");
const { sendEmailController } = require("../controllers/portfolioController");

const router = express.Router();

router.post("/sentEmail", sendEmailController);

module.exports = router;
