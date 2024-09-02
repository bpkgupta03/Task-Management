const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    console.log(user);
    await user.save();
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY);
    console.log(token);
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: newUser,
    });
    // res.status(201).send({ user, token});
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send({ error: "Invalid login credentials" });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).send({ error: "Invalid login credentials" });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY);
    res.status(200).json({
      success: true,
      message: "Login successful",
      token: token,
    });
    // res.send({ user, token });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
