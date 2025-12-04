const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    userAgent: req.headers["user-agent"],
    language: req.headers["accept-language"]?.split(",")[0],
  });
});

module.exports = router;
