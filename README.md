# 🧑‍💻 Intern Portal Backend

This is the backend for the **Intern Portal** project built using **Node.js** and **Express.js**. It provides dummy REST API endpoints to serve static data for the frontend intern dashboard.

---

## 🚀 Live URL

🔗 [https://intern-portal-backend-nuba.onrender.com](https://intern-portal-backend-nuba.onrender.com)

---

## 📁 Project Structure

intern-portal-backend/
├── index.js // Main server file with API routes
├── package.json // Project metadata and dependencies
└── README.md // Project documentation

---

## 📦 Tech Stack

- **Node.js**
- **Express.js**
- **CORS**
- **Render (for deployment)**

---

## 📡 API Endpoints

| Method | Endpoint                        | Description                                 |
|--------|----------------------------------|---------------------------------------------|
| GET    | `/api/intern`                   | Returns intern name, referral code, and total donations |
| GET    | `/api/rewards`                  | Returns static rewards and unlock status    |
| GET    | `/api/leaderboard`              | Returns dummy leaderboard data              |

Example usage:  
`https://intern-portal-backend-nuba.onrender.com/api/intern`

---

## 📥 Sample Responses

### `/api/intern`

```json
{
  "name": "Soumendra Priyadarshi",
  "referralCode": "soumendra2025",
  "totalDonations": 4200
}

/api/rewards
[
  {
    "reward": "Intern Certificate",
    "unlocked": true
  },
  {
    "reward": "T-shirt",
    "unlocked": true
  },
  {
    "reward": "Laptop Sticker",
    "unlocked": false
  }
]
/api/leaderboard
[
  {
    "name": "Soumendra",
    "referrals": 12
  },
  {
    "name": "Priya",
    "referrals": 9
  },
  {
    "name": "Rahul",
    "referrals": 7
  }
]


⚙️ Run Locally
# Clone this repo
git clone https://github.com/Soumendra02/intern-portal-backend.git

# Navigate to project directory
cd intern-portal-backend

# Install dependencies
npm install

# Start the development server
node index.js

he server will run at:
http://localhost:5000

📤 Deployment
The backend is hosted using Render.

Render automatically installs dependencies and starts your server based on index.js.

More info: https://render.com/docs/deploy-node

📄 License
This project is open source and free to use for learning purposes.