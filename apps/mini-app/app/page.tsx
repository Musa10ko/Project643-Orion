// app/page.tsx
import GameArena from "./components/game/GameArena";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pb-6">
      {/* Header */}
      <div className="px-5 pt-14 pb-4 flex justify-between items-center border-b border-white/10">
        <button className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
          <span className="text-2xl">☰</span>
        </button>
        <div className="flex items-center gap-2 bg-white/10 px-4 h-9 rounded-3xl text-sm font-mono">
          <span className="opacity-70">UQCf...Ivqv</span>
        </div>
      </div>

      {/* Головний контент */}
      <div className="px-5 pt-6">
        <GameArena />
      </div>
    </div>
  );
}