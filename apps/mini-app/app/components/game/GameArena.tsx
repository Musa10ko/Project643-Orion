// app/components/game/GameArena.tsx
"use client";

import { useState } from "react";
import ClueGrid from "./ClueGrid";           // поки порожній, створимо далі

export default function GameArena() {
  const [currentDay] = useState(1); // 1 = Понеділок, 5 = П'ятниця

  return (
    <div className="space-y-8">
      {/* Таймер + заголовок */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-2 rounded-3xl text-sm font-medium">
          <span className="text-[#50A7EA]">●</span>
          <span>До наступного reveal: 14 годин</span>
        </div>
        <h1 className="text-3xl font-bold mt-4">Weekly Arena</h1>
        <p className="text-gray-400 text-sm mt-1">День {currentDay} з 5</p>
      </div>

      {/* Центральна арена */}
      <div className="relative mx-auto w-full max-w-[320px] aspect-square rounded-[3rem] bg-gradient-to-br from-[#1A1A1E] to-[#111113] border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden">
        
        {/* Плейсхолдер для Clue Grid (будемо замінювати) */}
        <div className="text-center">
          <ClueGrid day={currentDay} />
        </div>

        {/* Центральна модель (поки заглушка) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-3xl flex items-center gap-3 border border-white/20">
          <div className="w-12 h-12 bg-[#F5A623] rounded-2xl flex items-center justify-center text-3xl">🧸</div>
          <div>
            <div className="font-bold text-lg">Toy Bear</div>
            <div className="text-xs text-gray-400">#12432</div>
          </div>
        </div>
      </div>

      {/* Кнопка Vote */}
      <div className="flex justify-center">
        <button 
          onClick={() => alert("Vote modal will open here")}
          className="bg-[#50A7EA] hover:bg-[#3D8EDB] transition-colors text-black font-bold text-xl px-16 py-6 rounded-3xl shadow-xl flex items-center gap-3"
        >
          <span>ГОЛОСУВАТИ</span>
          <span className="text-2xl">⭐</span>
        </button>
      </div>
    </div>
  );
}