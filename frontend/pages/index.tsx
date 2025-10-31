import Head from "next/head";
import CookieButton from "../components/CookieButton";
import Leaderboard from "../components/Leaderboard";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-celo to-farcaster text-white px-4">
      <Head>
        <title>Celo Cookie Clicker 🍪</title>
        <meta name="description" content="Click cookies and earn on Celo!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img src="/logo.svg" alt="Celo Cookie Logo" className="w-32 mb-4" />
      <h1 className="text-3xl font-bold mb-4">🍪 Celo Cookie Clicker</h1>
      <p className="mb-6 text-center">Click cookies, earn rewards, and climb the leaderboard!</p>

      <CookieButton player={"0xYourWalletAddress"} />
      <Leaderboard />
    </main>
  );
}
