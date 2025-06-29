const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

// ✅ Enable CORS for all origins
app.use(cors());

app.get("/api/message", (req, res) => {
  res.json({ message: "🚀 Hello from the backend!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

