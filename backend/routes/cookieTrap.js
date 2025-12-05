const express = require("express");
const router = express.Router();

// L'utilisateur clique sur "Accepter"
router.post("/accept", (req, res) => {
  // Cookie ultra basique + non sensible
  res.cookie("sensinum_cookie_trap", "accepted", {
    httpOnly: false,    // accessible côté front (on veut pouvoir le montrer)
    sameSite: "Lax",
    maxAge: 24 * 60 * 60 * 1000 // 24h
  });

  return res.json({
    choice: "accept",
    message: "Cookie piégé posé (sensinum_cookie_trap=accepted)"
  });
});

// L'utilisateur clique sur "Refuser"
router.post("/refuse", (req, res) => {
  res.clearCookie("sensinum_cookie_trap");
  return res.json({
    choice: "refuse",
    message: "Aucun cookie posé, bien joué 👏"
  });
});

module.exports = router;
