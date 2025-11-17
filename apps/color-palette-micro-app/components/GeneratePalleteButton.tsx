"use client";

import { Sparkles as SparklesIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function GeneratePaletteButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/?seed=${Date.now()}`)}
      className=" flex items-center gap-1 hover:scale-105  transition-all duration-300 justify-center py-2 px-5 tracking-tighter bg-linear-to-r rounded-lg  from-[#8870FF] to-[#018E79] text-transparent"
    >
      <SparklesIcon className="w-4 h-4 text-white" />
      <span className="text-white font-bold">Generate New</span>
    </button>
  );
}
