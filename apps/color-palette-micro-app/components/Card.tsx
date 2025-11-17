"use client";

import { CheckIcon, Copy as CopyIcon } from "lucide-react";

type CardProps = {
  color: string; // hex code for the color
  handleCopy: (color: string) => void;
  isCopied: boolean;
};
export default function Card({ color, handleCopy, isCopied }: CardProps) {
  console.log(color);
  return (
    <div
      onClick={() => handleCopy(color)}
      className="flex flex-col items-center justify-center group"
    >
      <div
        className="w-34 h-34 rounded-xl m-3 hover:scale-110 transition-all duration-300 hover:[box-shadow:0_0_20px_8px_var(--glow-color)]"
        style={{
          backgroundColor: color,
          ["--glow-color" as string]: `${color}80`,
        }}
      ></div>
      <div className="flex items-center justify-center gap-1">
        {isCopied ? (
          <>
            <CheckIcon className="w-4 h-4 text-amber-500" />
            <p className="text-sm text-amber-500 font-bold">Copied!</p>
          </>
        ) : (
          <>
            <p className="text-sm text-gray-300">{color.toUpperCase()}</p>
            <CopyIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-gray-500" />
          </>
        )}
      </div>
    </div>
  );
}
