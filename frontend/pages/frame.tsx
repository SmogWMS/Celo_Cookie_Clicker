export default function Frame() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-celo text-white">
      <h1 className="text-2xl font-bold mb-4">🍪 Celo Cookie Clicker</h1>
      <p>Click directly from Farcaster!</p>
      <a
        href="https://warpcast.com/~/compose?text=Click+Cookie+🍪&embeds[]=https://yourdomain.com/frame"
        className="bg-farcaster mt-6 px-6 py-3 rounded-lg font-semibold"
      >
        Share Frame
      </a>
    </div>
  );
}
