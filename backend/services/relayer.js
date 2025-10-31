import { ethers } from "ethers";
import dotenv from "dotenv";
import cookieClickerAbi from "./abi/CeloCookieClicker.json" assert { type: "json" };

dotenv.config();

const provider = new ethers.JsonRpcProvider(process.env.CELO_RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const contractAddress = process.env.CONTRACT_ADDRESS;
const contract = new ethers.Contract(contractAddress, cookieClickerAbi, wallet);

/**
 * Sync cookies on-chain for a player address.
 */
export async function syncCookies(address, cookies) {
  console.log(`🍪 Syncing ${cookies} cookies for ${address}...`);
  const tx = await contract.syncCookies(address, cookies);
  await tx.wait();
  console.log("✅ Cookies synced:", tx.hash);
  return tx.hash;
}
