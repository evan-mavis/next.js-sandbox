import GridItem from "./GridItem";

export default function Grid() {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4 p-4">
      <GridItem backgroundColor="bg-green-500" text="fastest" delay={200} />
      <GridItem
        backgroundColor="bg-green-400"
        text="second fastest"
        delay={400}
      />
      <GridItem
        backgroundColor="bg-yellow-400"
        text="third fastest"
        delay={600}
      />
      <GridItem backgroundColor="bg-yellow-500" text="moderate" delay={800} />
      <GridItem
        backgroundColor="bg-orange-500"
        text="third slowest"
        delay={1000}
      />
      <GridItem
        backgroundColor="bg-orange-600"
        text="second slowest"
        delay={1200}
      />
      <GridItem backgroundColor="bg-red-500" text="slowest" delay={1400} />
      <GridItem backgroundColor="bg-red-600" text="very slowest" delay={1600} />
    </div>
  );
}
