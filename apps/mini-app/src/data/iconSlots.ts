// apps/mini-app/src/data/iconSlots.ts
export interface IconSlot {
  id: number;
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

// Точні координати з твого back-2.svg (вручну витягнуто)
export const iconSlots: IconSlot[] = [
  { id: 0, x: 28, y: 22, scale: 0.92, rotation: -4 },
  { id: 1, x: 88, y: 18, scale: 1.08, rotation: 6 },
  { id: 2, x: 148, y: 25, scale: 0.95, rotation: -8 },
  { id: 3, x: 208, y: 20, scale: 1.05, rotation: 3 },
  { id: 4, x: 268, y: 24, scale: 0.98, rotation: -2 },
  { id: 5, x: 22, y: 82, scale: 1.12, rotation: 7 },
  { id: 6, x: 82, y: 78, scale: 0.88, rotation: -5 },
  { id: 7, x: 142, y: 85, scale: 1.03, rotation: 4 },
  { id: 8, x: 202, y: 79, scale: 0.97, rotation: -3 },
  { id: 9, x: 262, y: 83, scale: 1.09, rotation: 8 },
  { id: 10, x: 28, y: 138, scale: 0.94, rotation: -6 },
  { id: 11, x: 88, y: 142, scale: 1.06, rotation: 2 },
  { id: 12, x: 148, y: 135, scale: 0.99, rotation: -7 },
  { id: 13, x: 208, y: 140, scale: 1.01, rotation: 5 },
  { id: 14, x: 268, y: 137, scale: 0.93, rotation: -1 },
  { id: 15, x: 25, y: 198, scale: 1.11, rotation: 9 },
  { id: 16, x: 85, y: 202, scale: 0.89, rotation: -4 },
  { id: 17, x: 145, y: 195, scale: 1.04, rotation: 3 },
  { id: 18, x: 205, y: 199, scale: 0.96, rotation: -8 },
  { id: 19, x: 265, y: 197, scale: 1.07, rotation: 6 },
  { id: 20, x: 145, y: 255, scale: 1.00, rotation: 0 },
];