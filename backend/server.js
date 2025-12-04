const express = require("express");
const app = express();
const cors = require("cors");

// Middlewares
app.use(cors());
app.use(express.json());

// Import routes
const coursesRoutes = require("./routes/courses");
const quizzesRoutes = require("./routes/quizzes");
const ipRoutes = require("./routes/ip");
const metadataRoutes = require("./routes/metadata");

// Use routes
app.use("/courses", coursesRoutes);
app.use("/quizzes", quizzesRoutes);
app.use("/ip", ipRoutes);
app.use("/metadata", metadataRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
