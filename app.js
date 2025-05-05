const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/quoteRoutes");
require("dotenv").config(); // No need to store in a variable
const app = express();

// Middleware to parse JSON
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connection Successful"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5000;

app.use('/api/quote',router)

app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
