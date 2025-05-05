const express = require("express");
const {
  createQuote,
  getAllQuotes,
  deleteQuote,
  adminLogin,
} = require("../controllers/quoteController");
const { verifyAdmin } = require("../middleware/auth");
const router = express.Router();

router.post("/login",adminLogin)
router.post("/createQuote",verifyAdmin,createQuote);
router.get("/getQuotes", getAllQuotes);
router.delete("/deleteQuote",verifyAdmin, deleteQuote);

module.exports = router;
