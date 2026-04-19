// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import ClueGrid from "./components/game/ClueGrid";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useTelegram } from "./hooks/useTelegram";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Navigation } from "swiper/modules";

export default function HomePage() {
  const { isReady } = useTelegram();
  const [day] = useState<1 | 2 | 3 | 4 | 5>(3); // Для демо
  const [timeLeft, setTimeLeft] = useState({ hours: 14, mins: 35, secs: 12 });

  // Flip Clock logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, mins, secs } = prev;
        secs--;
        if (secs < 0) { secs = 59; mins--; }
        if (mins < 0) { mins = 59; hours--; }
        if (hours < 0) hours = 23;
        return { hours, mins, secs };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!isReady) {
    return <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center text-white">Завантаження Телеграм...</div>;
  }

  return (
    <div className="bg-light-50 text-gray-900 dark:bg-dark-900 dark:text-white font-sans antialiased h-screen overflow-hidden flex flex-col relative selection:bg-primary selection:text-white transition-colors duration-200 min-h-screen">
      {/* Background orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[50%] bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute top-[10%] right-[-10%] w-[60%] h-[40%] bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <main className="flex-1 overflow-y-auto pb-24 relative z-10 max-w-md mx-auto w-full">
        {/* Header */}
        <header className="sticky top-0 z-30 px-5 pt-14 pb-4 flex justify-between items-center">
          <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:scale-105 transition">
            <span className="material-icons-round text-2xl">menu</span>
          </button>
          <div className="flex items-center gap-2 bg-white/10 px-4 h-9 rounded-3xl text-sm font-mono">
            <span className="opacity-70">UQCf...Ivqv</span>
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
              <span className="material-icons-round text-white text-sm">account_balance_wallet</span>
            </div>
          </div>
        </header>


        <div className="z-[-1] overflow-hidden flex justify-center items-center glass-panel bottom-10 rounded-[2.4rem] items-center shadow-lg absolute inset-0">


         
          {/* Central Arena + ClueGrid */}
          <div className="relative flex justify-center mb-8">
            <ClueGrid day={day} />
          </div>   


            {/*  CENTRAL SWIRL (живий, динамічний, по VRF) */}

            <div className="vortex-rotate absolute flex justify-center items-center">
                {/* --- ЗАДНІЙ ФОН: Lottie Спіраль --- */}
                  <div className="absolute inset-0 z-0 scale-125 opacity-60">
                    <DotLottieReact
                      src="https://lottie.host/8fc38df6-196c-4bb7-a355-cb5684609e74/G8tIt33A0L.lottie"
                      loop
                      autoplay
                    />
                  </div>
            </div>

        </div>


        <div className="px-5 pt-6">
          {/* Flip Clock */}
          <div className="mb-6 glass-panel rounded-2xl px-2 pt-2 pb-4 flex items-center justify-center">
            <div className="flex items-center gap-3 text-4xl font-mono font-bold">
              <div className="text-center">
                <div className="bg-white/10 px-4 py-2 rounded-xl">{timeLeft.hours.toString().padStart(2, "0")}</div>
                <div className="text-xs text-gray-400 mt-1">HOURS</div>
              </div>
              <div className="text-gray-400">:</div>
              <div className="text-center">
                <div className="bg-white/10 px-4 py-2 rounded-xl">{timeLeft.mins.toString().padStart(2, "0")}</div>
                <div className="text-xs text-gray-400 mt-1">MINS</div>
              </div>
              <div className="text-gray-400">:</div>
              <div className="text-center">
                <div className="bg-white/10 px-4 py-2 rounded-xl">{timeLeft.secs.toString().padStart(2, "0")}</div>
                <div className="text-xs text-gray-400 mt-1">SECS</div>
              </div>
            </div>
          </div>


          {/* Swiper Models */}
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
            loop
            navigation
            modules={[EffectCoverflow, Navigation]}
            className="mb-10"
          >
            <SwiperSlide>
              <div className="glass-card rounded-3xl p-2 mx-auto w-64">
                <img src="https://i.ibb.co/HpHfXQh1/Plush Pepe-08.gif" alt="Plush Pepe" className="w-52 h-52 object-contain mx-auto" />
                <div className="text-center mt-3">
                  <p className="text-sm font-bold">Plush Pepe</p>
                  <p className="text-xs text-gray-400">Cozy Galaxy • 160,000</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="glass-card rounded-3xl p-2 mx-auto w-64">
                <img src="https://i.ibb.co/xK2JPRZD/rebit.gif" alt="Jelly Bunnies" className="w-52 h-52 object-contain mx-auto" />
                <div className="text-center mt-3">
                  <p className="text-sm font-bold">Jelly Bunnies</p>
                  <p className="text-xs text-gray-400">Meat Jelly • 9</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="glass-card rounded-3xl p-2 mx-auto w-64">
                <img src="https://i.ibb.co/xK2JPRZD/rebit.gif" alt="Jelly Bunnies" className="w-52 h-52 object-contain mx-auto" />
                <div className="text-center mt-3">
                  <p className="text-sm font-bold">Jelly Bunnies</p>
                  <p className="text-xs text-gray-400">Meat Jelly • 9</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="glass-card rounded-3xl p-2 mx-auto w-64">
                <img src="https://i.ibb.co/xK2JPRZD/rebit.gif" alt="Jelly Bunnies" className="w-52 h-52 object-contain mx-auto" />
                <div className="text-center mt-3">
                  <p className="text-sm font-bold">Jelly Bunnies</p>
                  <p className="text-xs text-gray-400">Meat Jelly • 9</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="glass-card rounded-3xl p-2 mx-auto w-64">
                <img src="https://i.ibb.co/xK2JPRZD/rebit.gif" alt="Jelly Bunnies" className="w-52 h-52 object-contain mx-auto" />
                <div className="text-center mt-3">
                  <p className="text-sm font-bold">Jelly Bunnies</p>
                  <p className="text-xs text-gray-400">Meat Jelly • 9</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Vote Button + Stats */}
          <div className="px-4 mb-8">
            <div className="glass-panel rounded-2xl p-1">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl px-6 py-5 flex justify-between items-center">
                <div className="flex flex-col text-xs font-mono">
                  <div>Rank: <span className="font-bold text-white">1</span></div>
                  <div>VP: <span className="font-bold text-white">×10</span></div>
                  <div>Stars: <span className="font-bold text-white">4567</span></div>
                </div>

                <button
                  onClick={() => alert("Vote modal will be here (next step)")}
                  className="flex-1 mx-6 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 hover:scale-105 transition"
                >
                  <span className="text-2xl">Vote</span>
                  <span className="material-icons-round text-3xl">campaign</span>
                </button>

                <div className="text-right text-xs font-mono">
                  <div>17/25 Tasks</div>
                  <div>445 Gifts</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Volume + Model Stats */}
          <div className="grid grid-cols-2 gap-4 px-4 mb-8">
            <div className="glass-panel rounded-3xl p-5">
              <p className="text-xs text-gray-400">Stats Volume</p>
              <p className="text-sm mt-2">Графік об’єму торгів за цикл</p>
            </div>
            <div className="glass-panel rounded-3xl p-5">
              <p className="text-xs text-gray-400">Model Stats</p>
              <p className="text-sm mt-2">Розподіл голосів по моделях</p>
            </div>
          </div>

          {/* Gifts banner */}
          <div className="mx-4 p-1 glass-panel rounded-3xl mb-8">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl p-6 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg">Complete tasks —</h3>
                <p className="text-white/90">exchange for gifts</p>
              </div>
              <img src="https://i.ibb.co/MkdWmTTw/Gifts-box-img.png" alt="Gifts" className="w-28 h-28 object-contain" />
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Nav (вже є в твоєму проекті) */}
      {/* Якщо ще не підключений — просто імпортуй <BottomNav /> тут */}

      {/* Vote Modal (буде наступним кроком) */}
    </div>
  );
}