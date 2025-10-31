"use client";
import { useState } from "react";
import axios from "axios";

export default function CookieButton({ player }: { player: string }) {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    setCount(count + 1);
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/frame/click`, {
        address: player,
      });
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="bg-celo text-white px-6 py-3 rounded-full shadow-lg text-lg font-bold hover:bg-green-500 transition-all"
    >
      🍪 {loading ? "Clicking..." : "Click Cookie"} ({count})
    </button>
  );
}
