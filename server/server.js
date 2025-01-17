const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API is running..."));

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://nitin:nitin@cluster0.8r4nf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const contactRoute = require("./routes/contact");
app.use("/api/contact", contactRoute);
