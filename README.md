# 📚 Book API Server with Full Test Coverage

Welcome to the **Book API Server** — a simple and powerful REST API built with **Node.js**, **Express**, and **MongoDB**.  
This project includes **unit tests**, **integration tests**, and **API tests** with over **80% test coverage** using **Jest**, **Supertest**, and **mongodb-memory-server**.

---

## 🚀 Features

- 📘 CRUD operations for Book resource
- ✅ Unit tested controller logic with mocking
- 🔁 Integration tested with in-memory MongoDB
- 🌐 API tested using Supertest
- 📊 Over 80% test coverage
- 🧪 Lightweight and modular architecture

---

## 🧠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Testing:**
  - Jest (Unit/Integration Test Framework)
  - Supertest (API Endpoint Testing)
  - mongodb-memory-server (Mock In-Memory MongoDB for tests)

---

## 📦 Installation & Setup

```bash
# 1. Clone the repo
git clone https://github.com/your-username/book-api-server.git
cd book-api-server

# 2. Install dependencies
npm install

# 3. Run the server
npm start

.
├── server.js                     # Express setup & MongoDB connection
├── models/
│   └── Book.js                   # Mongoose Book model
├── controllers/
│   └── bookController.js         # Controller with create & get logic
├── routes/
│   └── bookRoutes.js             # API route handlers
├── tests/
│   ├── unit/                     # Unit tests (mocked DB)
│   │   └── bookController.test.js
│   ├── integration/              # DB integration test
│   │   └── dbIntegration.test.js
│   └── api/                      # Full API test with Supertest
│       └── apiRoutes.test.js
├── coverage.png                  # Test coverage screenshot
├── package.json
└── README.md                     # You're reading it!

