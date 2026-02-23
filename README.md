# 🔐 Authentication System

A full-stack authentication system built using Node.js, Express, MongoDB, and JWT with GitHub auto-deployment integration.

## 🚀 Features

User Registration

User Login

Password Hashing (bcrypt)

JWT Authentication

Protected Routes

GitHub Repository Auto Deployment

## 🛠 Tech Stack

Backend: Node.js, Express, MongoDB, Mongoose, JWT, bcrypt
Frontend: HTML, CSS, JavaScript
Other: Axios, dotenv, cors

## ⚙️ Setup
1. Install Dependencies
npm install
2. Create .env file
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/authSystem
JWT_SECRET=your_secret_key
GITHUB_TOKEN=your_github_token
3. Start Server
node server.js

Server runs at:

http://localhost:5000
## 📡 API Endpoints

POST /api/auth/register

POST /api/auth/login

POST /api/deploy

## 🔒 Security

Password hashing with bcrypt

JWT-based authentication

Environment variable protection
