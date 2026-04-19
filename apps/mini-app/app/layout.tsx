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
      <body className="bg-light-50 text-gray-900 dark:bg-dark-900 dark:text-white font-sans antialiased h-screen overflow-hidden flex flex-col relative selection:bg-primary selection:text-white transition-colors duration-200 min-h-screen">
        {/* Основний контент */}
        <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[50%] bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen dark:mix-blend-lighten"></div>
            <div className="absolute top-[10%] right-[-10%] w-[60%] h-[40%] bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen dark:mix-blend-lighten"></div>
        </div>
        <main className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar pb-24 relative z-10 w-full max-w-md mx-auto">
          {children}
        </main>

        {/* Bottom Navigation */}
        <BottomNav />
      </body>
    </html>
  );
}