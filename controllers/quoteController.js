const Quote = require("../models/quotes");

const adminLogin = async (req, res) => {
  const { username, password } = req.body;

  //hardcoded admin login
  if (username === "admin" && password === "password123") {
    const jwt = require("jsonwebtoken");
    const token = jwt.sign(
      { username, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    return res.json({ token });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
};

const createQuote = async (req, res) => {
  try {
    const body = req.body;
    const newQuote = new Quote({
      author: body.author,
      category: body.category,
      quote: body.quote,
    });
    await newQuote.save();
    res.status(201).json({ message: "created successfully", id: newQuote._id });
  } catch (err) {
    res.status(500).json({ message: "Server error!" });
  }
};

const getAllQuotes = async (req, res) => {
  try {
    const { author, category, noOfQuotes } = req.query;
    const query = {};
    if (author) query.author = author;
    if (category) query.category = category;
    const limit = parseInt(noOfQuotes) || 10;
    const quotes = await Quote.find(query).limit(limit);
    res.json({ quotes: quotes });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

const deleteQuote = async (req, res) => {
  try {
    const { _id } = req.query;
    const deletedQuote = await Quote.findByIdAndDelete(_id);

    if (!deletedQuote) {
      return res.status(404).json({ message: "Quote not found!" });
    }
   
    return res.json({ message: "Quote deleted successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { adminLogin, getAllQuotes, createQuote, deleteQuote };
