const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Enable CORS (so frontend can access backend)
app.use(cors());

// Dummy intern data route
app.get('/api/intern', (req, res) => {
  res.json({
    name: "Soumendra Priyadarshi",
    referralCode: "soum2025",
    totalDonations: 4200
  });
});

// Dummy rewards data route
app.get('/api/rewards', (req, res) => {
  res.json([
    { reward: "Intern Certificate", unlocked: true },
    { reward: "T-shirt", unlocked: true },
    { reward: "Laptop Sticker", unlocked: false },
  ]);
});

// Dummy leaderboard data route
app.get('/api/leaderboard', (req, res) => {
  res.json([
    { name: "Soumendra", donations: 4200 },
    { name: "Alice", donations: 3800 },
    { name: "Bob", donations: 3100 },
  ]);
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});