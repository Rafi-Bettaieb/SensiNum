require("dotenv").config(); // charge les variables d'environnement
const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Import routes existantes
const coursesRoutes = require("./routes/courses");
const quizzesRoutes = require("./routes/quizzes");
const ipRoutes = require("./routes/ip");
const metadataRoutes = require("./routes/metadata");
const cookieParser = require("cookie-parser");

// Import route chatbot
const chatbotRoutes = require("./routes/chatbot");

// Use routes
app.use("/courses", coursesRoutes);
app.use("/quizzes", quizzesRoutes);
app.use("/ip", ipRoutes);
app.use("/metadata", metadataRoutes);
app.use("/chatbot", chatbotRoutes); // <- chatbot intégré

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
