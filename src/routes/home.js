const express = require("express");
const router = express.Router()

router.all("about", (req, res) => {
  res.send("About Page");
});

router.get("/dashboard", (req, res) => {
  res.send("Dashaboard Page");
});

module.exports = router
