import ColorCards from "@/components/ColorCards";
import GeneratePaletteButton from "@/components/GeneratePalleteButton";
import Header from "@/components/Header";
import { generateColorPalette } from "@/lib/utils";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ seed?: string }>;
}) {
  const { seed } = await searchParams;
  const colorPalette = generateColorPalette(seed);

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <Header />
      <ColorCards colorPalette={colorPalette} />
      <GeneratePaletteButton />
    </main>
  );
}
