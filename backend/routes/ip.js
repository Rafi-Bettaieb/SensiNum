const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress;

  res.json({ ip });
});

module.exports = router;
