import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import frameRouter from "./routes/frame.js";
import { syncCookies } from "./services/relayer.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get("/", (_, res) => res.send("🍪 Celo Cookie Clicker Backend is running!"));

// Routes
app.use("/frame", frameRouter);

// Sync cookies manually (debug)
app.post("/sync", async (req, res) => {
  const { address, cookies } = req.body;
  try {
    const tx = await syncCookies(address, cookies);
    res.json({ success: true, tx });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
