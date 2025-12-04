const express = require("express");
const router = express.Router();

// GET /metadata - renvoie les métadonnées du client
router.get("/", (req, res) => {
  const userAgent = req.headers["user-agent"];
  const language = req.headers["accept-language"];
  const ip =
    req.headers["x-forwarded-for"] ||
    req.socket.remoteAddress ||
    req.connection.remoteAddress;

  res.json({
    ip: ip,
    userAgent: userAgent,
    language: language,
    timestamp: new Date().toISOString(),
    message: "Métadonnées utilisateur récupérées avec succès"
  });
});

module.exports = router;
