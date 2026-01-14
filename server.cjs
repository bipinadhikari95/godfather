const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve all static files from this folder
app.use(express.static(path.join(__dirname)));

// Default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Website running at http://localhost:${PORT}`);
});
