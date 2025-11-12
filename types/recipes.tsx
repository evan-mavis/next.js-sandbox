export type Recipe = {
  id: number;
  image: string;
  name: string;
  description: string;
  servings: number;
  timeInMinutes: number;
  level: "easy" | "medium" | "hard";
};
