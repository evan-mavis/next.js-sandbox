import { recipes } from "@/lib/mock-recipe-data";
import Recipe from "./Recipe";

export default function RecipesGrid() {
  return (
    <div className="px-30 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {recipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
}
