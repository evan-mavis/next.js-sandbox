import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateRandomHex(seed?: number): string {
  let randomValue: number;

  if (seed !== undefined) {
    randomValue = seededRandom(seed);
  } else {
    randomValue = Math.random();
  }

  const hexValue = Math.floor(randomValue * 16777215);
  return `#${hexValue.toString(16).padStart(6, "0")}`;
}

export function generateColorPalette(seed?: string): string[] {
  const seedNum = seed ? parseInt(seed, 10) : undefined;

  return Array.from({ length: 5 }, (_, i) => {
    const colorSeed = seedNum !== undefined ? seedNum + i : undefined;
    return generateRandomHex(colorSeed);
  });
}
