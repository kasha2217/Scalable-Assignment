const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
  quote: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
  createdDate: { type: Date, default: Date.now },
});

const Quote = mongoose.model("quote", quoteSchema);
module.exports = Quote