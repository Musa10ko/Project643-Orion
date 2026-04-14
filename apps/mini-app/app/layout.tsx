import type { Metadata } from "next";
import "./globals.css";
import BottomNav from "./components/ui/BottomNav";

export const metadata: Metadata = {
  title: "Blender — Gamified NFT Liquidity",
  description: "NFT Gifts that earn",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className="bg-[#0A0A0A] text-white min-h-screen pb-20">
        {/* Основний контент */}
        <main className="max-w-md mx-auto min-h-screen bg-[#0A0A0A]">
          {children}
        </main>

        {/* Bottom Navigation */}
        <BottomNav />
      </body>
    </html>
  );
}