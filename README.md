# 🍪 Celo Cookie Clicker

**Celo Cookie Clicker** is a simple, fun and mobile-friendly Web3 game built on the **Celo blockchain** — integrated with **Farcaster Frames** so you can click cookies directly from your Warpcast feed!

---

## 🚀 Overview

Players click the cookie 🍪 to earn on-chain points (“cookies”).  
Every click is synced through a **relayer** that interacts with the deployed smart contract on **Celo mainnet**.

This project demonstrates:
- Simple **Web3 on-chain interactions**.
- **Farcaster Frame integration** with a playful experience.
- **Minimal mobile UX** optimized for wallets like Valora or MetaMask.
- Built with **Next.js, Tailwind, Hardhat, and Ethers.js**.

---

## 🧩 Tech Stack

| Layer | Tech |
|-------|------|
| Smart Contract | Solidity (Hardhat) |
| Blockchain | Celo Mainnet |
| Frontend | Next.js + TailwindCSS + RainbowKit |
| Backend | Node.js (Express) |
| Web3 | Ethers.js |
| Social | Farcaster Frames |

---

## 🧱 Project Structure

Celo_Cookie_Clicker/
│
├── contracts/ # Smart contract (Solidity)
├── deploy/ # Hardhat deployment script
├── backend/ # Node.js API + Relayer
├── frontend/ # Next.js app
├── hardhat.config.ts # Hardhat setup for Celo
├── README.md # This file
└── package.json # Root config


---

## 🧠 How It Works

1. User clicks the 🍪 button on the frontend or through a Farcaster Frame.  
2. The click sends a request to the backend (`/frame/click`).  
3. The **relayer** wallet signs a transaction calling `syncCookies()` on-chain.  
4. The contract stores the total cookies per user.  
5. The leaderboard updates live!
