import Header from "@/components/Header";
import RecipesGrid from "@/components/RecipesGrid";
import SearchBar from "@/components/SearchBar";

export default function Recipes() {
  return (
    <div className="flex flex-col items-center justify-center`">
      <Header />
      <SearchBar />
      <RecipesGrid />
    </div>
  );
}
