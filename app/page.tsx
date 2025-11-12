import Header from "@/components/Header";
import RecipesGrid from "@/components/RecipesGrid";
import SearchBar from "@/components/SearchBar";

export default async function Recipes({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;

  return (
    <div className="flex flex-col items-center justify-center`">
      <Header />
      <SearchBar />
      <RecipesGrid query={query ?? ""} />
    </div>
  );
}
