"use client";

import { useState } from "react";
import Card from "./Card";

type ColorCardsProps = {
  colorPalette: string[];
};

export default function ColorCards({ colorPalette }: ColorCardsProps) {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const handleCopy = async (color: string) => {
    try {
      await navigator.clipboard.writeText(color);
      setCopiedColor(color);
      setTimeout(() => {
        setCopiedColor(null);
      }, 3000);
    } catch (error) {
      console.error("Failed to copy color: ", error);
    }
  };

  return (
    <div className="flex items-center justify-center mb-10">
      <Card
        color={colorPalette[0]}
        handleCopy={handleCopy}
        isCopied={copiedColor === colorPalette[0]}
      />
      <Card
        color={colorPalette[1]}
        handleCopy={handleCopy}
        isCopied={copiedColor === colorPalette[1]}
      />
      <Card
        color={colorPalette[2]}
        handleCopy={handleCopy}
        isCopied={copiedColor === colorPalette[2]}
      />
      <Card
        color={colorPalette[3]}
        handleCopy={handleCopy}
        isCopied={copiedColor === colorPalette[3]}
      />
      <Card
        color={colorPalette[4]}
        handleCopy={handleCopy}
        isCopied={copiedColor === colorPalette[4]}
      />
    </div>
  );
}
