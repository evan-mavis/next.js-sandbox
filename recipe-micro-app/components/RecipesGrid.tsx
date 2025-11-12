import Recipe from "./Recipe";
import { Suspense } from "react";
import Loading from "./Loading";
import { getRecipes } from "@/lib/data";

type RecipesGridProps = {
  query: string;
};

export default async function RecipesGrid({ query }: RecipesGridProps) {
  const recipes = (await getRecipes(query)) ?? [];

  return (
    <Suspense fallback={<Loading message="Loading Recipes..." />}>
      <div className="px-30 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {recipes.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </Suspense>
  );
}
