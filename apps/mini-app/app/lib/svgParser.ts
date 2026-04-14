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

  // Знаходимо всі <g> з transform="translate(x y)scale(s)"
  const gMatches = svgString.matchAll(
    /<g[^>]*transform="translate\(([\d.-]+)\s+([\d.-]+)\)scale\(([\d.-]+)\)"[^>]*>/g
  );

  let id = 0;
  for (const match of gMatches) {
    const x = parseFloat(match[1]);
    const y = parseFloat(match[2]);
    const scale = parseFloat(match[3]);

    // Додаємо невелику ротацію (з твого SVG є transform з rotate)
    const rotationMatch = svgString
      .slice(match.index, match.index! + 300)
      .match(/rotate\(([\d.-]+)\)/);

    const rotation = rotationMatch ? parseFloat(rotationMatch[1]) : 0;

    slots.push({
      id: id++,
      x,
      y,
      scale: scale || 1,
      rotation,
    });
  }

  // Якщо парсер знайшов не 21 — коригуємо вручну (твій SVG має 21 іконку)
  return slots.length === 21 ? slots : slots.slice(0, 21);
}