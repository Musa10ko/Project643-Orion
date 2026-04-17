// app/components/game/GameArena.tsx
"use client";

import { useState } from "react";
import ClueGrid from "./ClueGrid";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function GameArena() {
  const [currentDay] = useState(3);

  return (
    <div className="space-y-8 px-4">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-2 rounded-3xl text-sm font-medium">
          <span className="text-[#50A7EA]">●</span>
          <span>До reveal: 14 годин</span>
        </div>
        <h1 className="text-3xl font-bold mt-4">Weekly Arena</h1>
        <p className="text-gray-400 text-sm mt-1">День {currentDay} з 5</p>
      </div>

      <div className="relative mx-auto w-full max-w-[320px] aspect-square rounded-[3rem] bg-gradient-to-br from-[#1A1A1E] to-[#111113] border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden">
        <ClueGrid day={currentDay} />
      </div>

      {/* Swiper моделей */}
      <div className="px-2">
        <Swiper spaceBetween={12} slidesPerView={2.2} className="py-2">
          <SwiperSlide>
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-4 text-center">
              <div className="aspect-square bg-[#F5A623] rounded-2xl flex items-center justify-center text-6xl mb-3">🧸</div>
              <div className="font-bold">Toy Bear</div>
              <div className="text-xs text-gray-400">#12432</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-4 text-center">
              <div className="aspect-square bg-[#50A7EA] rounded-2xl flex items-center justify-center text-6xl mb-3">🐸</div>
              <div className="font-bold">Plush Pepe</div>
              <div className="text-xs text-gray-400">#17</div>
            </div>
          </SwiperSlide>
           <SwiperSlide>
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-4 text-center">
              <div className="aspect-square bg-[#50A7EA] rounded-2xl flex items-center justify-center text-6xl mb-3">🐸</div>
              <div className="font-bold">Plush Pepe</div>
              <div className="text-xs text-gray-400">#17</div>
            </div>
          </SwiperSlide>
           <SwiperSlide>
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-4 text-center">
              <div className="aspect-square bg-[#50A7EA] rounded-2xl flex items-center justify-center text-6xl mb-3">🐸</div>
              <div className="font-bold">Plush Pepe</div>
              <div className="text-xs text-gray-400">#17</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex justify-center px-4">
        <button className="w-full bg-[#50A7EA] hover:bg-[#3D8EDB] text-black font-bold text-xl py-6 rounded-3xl shadow-xl flex items-center justify-center gap-3 transition-all active:scale-95">
          <span>ГОЛОСУВАТИ ЗАРАЗ</span>
          <span className="text-3xl">⭐</span>
        </button>
      </div>
    </div>
  );
}