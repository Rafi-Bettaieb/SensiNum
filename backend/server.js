const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Middlewares globaux
app.use(cors());
app.use(express.json());
app.use(cookieParser());  // 🔥 placé AVANT les routes pour analyser les cookies

// Import routes
const coursesRoutes = require("./routes/courses");
const quizzesRoutes = require("./routes/quizzes");
const ipRoutes = require("./routes/ip");
const metadataRoutes = require("./routes/metadata");
const cookieTrapRoutes = require("./routes/cookieTrap");

// Use routes
app.use("/courses", coursesRoutes);
app.use("/quizzes", quizzesRoutes);
app.use("/ip", ipRoutes);
app.use("/metadata", metadataRoutes);
app.use("/api/cookie-trap", cookieTrapRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
