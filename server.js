const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("API Working Successfully 🚀");
});


// ================= REGISTER API =================
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });

    await newUser.save();

    res.json({ message: "User Registered Successfully ✅" });

  } catch (error) {
    res.status(500).json({ error: "Registration Failed ❌" });
  }
});


// ================= LOGIN API =================
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found ❌" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Password ❌" });
    }

    res.json({ message: "Login Successful 🎉" });

  } catch (error) {
    res.status(500).json({ error: "Login Failed ❌" });
  }
});


// ================= DATABASE CONNECTION =================
mongoose.connect("mongodb://127.0.0.1:27017/mydatabase")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log(err));


// ================= START SERVER =================
app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});