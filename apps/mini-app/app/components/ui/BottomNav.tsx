"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, User, Receipt, BarChart3, Trophy } from "lucide-react";

const navItems = [
  
  { href: "/profile", label: "Profile", icon: User },
  { href: "/analytics", label: "Stats", icon: BarChart3 },
  { href: "/", label: "Home", icon: Home },
  { href: "/wall", label: "Wall", icon: Receipt },
  { href: "/pantheon", label: "Pantheon", icon: Trophy },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
<nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-md mx-auto">
  <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-[32px] border border-white/20 px-2 py-1 grid grid-cols-5 items-end text-center shadow-2xl">
    {navItems.map((item, index) => {
      const isActive = pathname === item.href;
      const isCenter = index === 2; // Центральна кнопка (Home)

      if (isCenter) {
        return (
          <Link key={item.href} href={item.href} className="relative -top-2 flex flex-col items-center">
            <div className={`
              relative z-40 p-1 border-t border-white/40 glass-panel rounded-[14px] shadow-xl transition-all
              ${isActive ? "bg-white/10" : ""}
            `}>
              <div className={`
                mx-2 p-2 rounded-full transition-all border border-white/10
                ${isActive ? "bg-[#50A7EA]/30 text-[#50A7EA]" : "bg-white/5 text-gray-400"}
              `}>
                <item.icon className={`w-7 h-7 transition-transform ${isActive ? "scale-110" : ""}`} />
              </div>
              <p className={`text-[11px] mt-1 font-bold tracking-wide transition-colors ${isActive ? "text-[#50A7EA]" : "text-gray-300"}`}>
                {item.label}
              </p>
            </div>
          </Link>
        );
      }

      return (
        <Link
          key={item.href}
          href={item.href}
          className={`flex flex-col items-center pb-2 transition-all ${
            isActive ? "text-[#50A7EA]" : "text-gray-400"
          }`}
        >
          <item.icon className={`w-6 h-6 mb-0.5 transition-transform ${isActive ? "scale-110" : "opacity-70"}`} />
          <span className="text-[10px] font-medium">{item.label}</span>
          {isActive && (
            <div className="absolute bottom-1 w-1 h-1 bg-[#50A7EA] rounded-full shadow-[0_0_8px_#50A7EA]" />
          )}
        </Link>
      );
    })}
  </div>
</nav>
  );
}