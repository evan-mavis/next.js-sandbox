import { Recipe } from "@/types/recipes";

export async function getRecipes(query: string): Promise<Recipe[] | null> {
  const url = `https://${process.env.RAPID_API_HOST}/recipes/complexSearch?query=${query}&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeInstructions=false&addRecipeNutrition=false&offset=0&number=10`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.RAPID_API_KEY ?? "",
      "x-rapidapi-host": process.env.RAPID_API_HOST ?? "",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }

  return null;
}
