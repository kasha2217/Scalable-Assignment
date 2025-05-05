const express = require("express");
const {
  createQuote,
  getAllQuotes,
  deleteQuote,
} = require("../controllers/quoteController");
const router = express.Router();

router.post("/createQuote", createQuote);
router.get("/getQuotes", getAllQuotes);
router.delete("/deleteQuote", deleteQuote);

module.exports = router;
