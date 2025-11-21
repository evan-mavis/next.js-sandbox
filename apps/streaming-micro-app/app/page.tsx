import Grid from "@/components/Grid";
import NestedStreamingExample from "@/components/NestedStreamingExample";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div className="flex flex-col items-center justify-center">
      <NestedStreamingExample />
      <Grid />
    </div>
  );
}
