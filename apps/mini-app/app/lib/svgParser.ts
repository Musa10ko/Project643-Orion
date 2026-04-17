// app/lib/svgParser.ts
export interface IconSlot {
  id: number;
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

export function parseBack2Svg(svgString: string): IconSlot[] {
  const slots: IconSlot[] = [];
  let id = 0;

  // Знаходимо всі групи з transform
  const matches = svgString.matchAll(
    /<g[^>]*transform="translate\(([\d.-]+)\s+([\d.-]+)\)[^"]*scale\(([\d.-]+)\)[^"]*"[^>]*>/g
  );

  for (const match of matches) {
    const x = parseFloat(match[1]);
    const y = parseFloat(match[2]);
    const scale = parseFloat(match[3]) || 1;

    // Шукаємо rotate
    const rotateMatch = svgString
      .slice(match.index!, match.index! + 400)
      .match(/rotate\(([\d.-]+)\)/);

    const rotation = rotateMatch ? parseFloat(rotateMatch[1]) : 0;

    slots.push({ id: id++, x, y, scale, rotation });
  }

  // Якщо парсер знайшов менше 21 — fallback
  if (slots.length < 21) {
    console.warn(`Знайдено лише ${slots.length} слотів. Використовуємо fallback.`);
    return Array.from({ length: 21 }, (_, i) => ({
      id: i,
      x: (i % 5) * 58 + 18,
      y: Math.floor(i / 5) * 58 + 18,
      scale: 1,
      rotation: (i % 3) * 8 - 8,
    }));
  }

  return slots;
}