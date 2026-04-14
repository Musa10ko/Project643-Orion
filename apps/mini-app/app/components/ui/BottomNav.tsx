"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, User, Receipt, BarChart3, Trophy } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/profile", label: "Profile", icon: User },
  { href: "/wall", label: "Wall", icon: Receipt },
  { href: "/analytics", label: "Stats", icon: BarChart3 },
  { href: "/pantheon", label: "Pantheon", icon: Trophy },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-[#1A1A1E]/95 backdrop-blur-xl border-t border-white/10 z-50">
      <div className="grid grid-cols-5 py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center py-1 transition-all ${
                isActive ? "text-[#50A7EA]" : "text-gray-400 hover:text-white"
              }`}
            >
              <item.icon className={`w-6 h-6 ${isActive ? "scale-110" : ""}`} />
              <span className="text-[10px] mt-0.5 font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}