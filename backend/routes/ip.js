// routes/ip.js
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    let ip =
      req.headers["x-forwarded-for"] ||
      req.socket.remoteAddress ||
      req.connection.remoteAddress;

    // Nettoyage de l'IP
    let cleanIp = ip.replace("::ffff:", "");

    // ASTUCE POUR LE DEV : Si on est en local (127.0.0.1 ou ::1)
    if (cleanIp === "127.0.0.1" || cleanIp === "::1") {
      // cleanIp = "8.8.8.8"; // <-- Google (souvent aux USA)
      cleanIp = "212.27.48.10"; // <-- IP Free SAS (Localisée à Paris)
    }

    // Appel à l'API
    const geoResponse = await axios.get(`https://ipapi.co/${cleanIp}/json/`);
    const data = geoResponse.data;

    res.json({
      ip: cleanIp,
      latitude: data.latitude,
      longitude: data.longitude,
      city: data.city,
      country_name: data.country_name,
      org: data.org
    });
  } catch (error) {
    console.error(error);
    // Valeurs par défaut (Centre de Paris) en cas d'erreur API
    res.status(200).json({ 
        ip: "Inconnue", 
        latitude: 48.8566, 
        longitude: 2.3522,
        city: "Paris (Fallback)",
        country_name: "France",
        org: "Inconnu"
    });
  }
});

module.exports = router;