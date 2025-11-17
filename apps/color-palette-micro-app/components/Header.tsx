export default function Header() {
  return (
    <div className="flex mb-6 flex-col items-center justify-center">
      <h1 className="mb-3 text-6xl md:text-7xl font-black tracking-tighter bg-linear-to-r from-[#0080B2] to-[#018E79] bg-clip-text text-transparent px-4 [-webkit-text-stroke:1px_rgba(0,128,178,0.2)]">
        Palette
      </h1>
      <p className="text-xl text-gray-500">
        Generate stunning color palettes in seconds.
      </p>
    </div>
  );
}
