import express from "express";
import { syncCookies } from "../services/relayer.js";

const router = express.Router();

/**
 * Farcaster Frame - Click event
 * When a user clicks inside Farcaster, this endpoint is called
 */
router.post("/click", async (req, res) => {
  const { address } = req.body;
  try {
    const tx = await syncCookies(address, 1);
    res.json({ success: true, tx });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

/**
 * Frame metadata (used by Farcaster to render the frame)
 */
router.get("/metadata", (_, res) => {
  res.json({
    title: "🍪 Celo Cookie Clicker",
    description: "Click cookies on Celo blockchain!",
    image: "https://yourdomain.com/logo.svg",
    buttons: [{ label: "Click 🍪" }],
  });
});

export default router;
