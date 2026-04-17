// app/components/game/ClueGrid.tsx
"use client";

import { motion } from "framer-motion";
import { iconSlots, type IconSlot } from "../../../src/data/iconSlots";
import { patterns } from "../../../src/data/patterns";

interface ClueGridProps {
  day: 1 | 2 | 3 | 4 | 5;
}

export default function ClueGrid({ day }: ClueGridProps) {
  const typeCount = day === 1 ? 4 : day === 2 ? 3 : day === 3 ? 2 : 1;

  return (
    <div className="relative w-[300px] h-[300px] mx-auto overflow-hidden">
      {/* Rive Vortex (центр) */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="text-[220px] opacity-20 scale-110">🌪️</div>
      </div>

      {iconSlots.map((slot) => {
        const patternIndex = (slot.id % typeCount) + 1;
        const patternSrc = patterns[patternIndex as keyof typeof patterns];

        const config = {
          1: { blur: 2.6, saturate: 5.0, distort: 15, noise: 0.45 },
          2: { blur: 2.0, saturate: 4.0, distort: 10, noise: 0.28 },
          3: { blur: 1.2, saturate: 2.5, distort: 5,  noise: 0.16 },
          4: { blur: 0.5, saturate: 1.5, distort: 2,  noise: 0.06 },
          5: { blur: 0.0, saturate: 1.0, distort: 0,  noise: 0.00 },
        }[day];

        return (
          <motion.div
            key={slot.id}
            className="absolute flex items-center justify-center"
            style={{
              left: `${slot.x}px`,
              top: `${slot.y}px`,
              width: "52px",
              height: "52px",
              transform: `scale(${slot.scale}) rotate(${slot.rotation}deg)`,
            }}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: slot.id * 0.012 }}
          >
            <img
              src={patternSrc}
              alt=""
              className="w-full h-full object-contain drop-shadow-2xl"
              style={{
                filter: `blur(${config.blur}px) saturate(${config.saturate}) contrast(1.15)`,
              }}
            />

            {/* Glitch RGB Split */}
            {day < 5 && (
              <>
                <div
                  className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl mix-blend-screen"
                  style={{
                    backgroundImage: `url(${patternSrc})`,
                    left: `-${config.distort}px`,
                    filter: "drop-shadow(2px 0 #ff0088)",
                    animation: "glitch 0.25s infinite alternate",
                    opacity: 0.4,
                  }}
                />
                <div
                  className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl mix-blend-screen"
                  style={{
                    backgroundImage: `url(${patternSrc})`,
                    left: `${config.distort}px`,
                    filter: "drop-shadow(-2px 0 #00ffff)",
                    animation: "glitch 0.35s infinite alternate",
                    opacity: 0.35,
                  }}
                />
              </>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}