const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes
app.use("/api/ip", require("./routes/ip"));
app.use("/api/metadata", require("./routes/metadata"));
app.use("/api/chatbot", require("./routes/chatbot"));

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
