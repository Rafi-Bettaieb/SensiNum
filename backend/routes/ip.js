const express = require("express");
const router = express.Router();
const axios = require("axios");

// GET /ip - renvoie l'adresse IP + géolocalisation
router.get("/", async (req, res) => {
  try {
    // Récupérer l'IP du client
    const ip =
      req.headers["x-forwarded-for"] ||
      req.socket.remoteAddress ||
      req.connection.remoteAddress;

    // Nettoyer "::ffff:" si présent
    const cleanIp = ip.replace("::ffff:", "");

    // Appel à l'API de géolocalisation
    const geoResponse = await axios.get(`https://ipapi.co/${cleanIp}/json/`);

    const data = geoResponse.data;

    res.json({
      ip: cleanIp,
      latitude: data.latitude,
      longitude: data.longitude,
      city: data.city,
      region: data.region,
      country: data.country_name
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Impossible de récupérer la géolocalisation" });
  }
});

module.exports = router;
