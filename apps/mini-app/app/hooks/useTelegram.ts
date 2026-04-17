// app/hooks/useTelegram.ts
'use client';

import { useEffect, useState } from 'react';
import { useUserStore } from '../../src/lib/stores/useUserStore';

export function useTelegram() {
  const { setUser } = useUserStore();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // @ts-ignore — Telegram WebApp SDK
    const tg = window.Telegram?.WebApp;
    if (!tg) {
      console.warn("Telegram WebApp не знайдено (розробка в браузері)");
      setIsReady(true);
      return;
    }

    tg.ready();
    tg.expand();

    const userData = tg.initDataUnsafe?.user;
    if (userData) {
      const user = {
        id: userData.id.toString(),
        telegramId: userData.id,
        username: userData.username || userData.first_name || "User",
        photoUrl: userData.photo_url,
        rank: 1,
        vp: 10,
        stars: 4567,
      };
      setUser(user);
    }

    setIsReady(true);
  }, [setUser]);

  return { isReady };
}