export type Recipe = {
  id: number;
  image: string;
  title: string;
  summary: string;
  servings: number;
  readyInMinutes: number;
  level: "easy" | "medium" | "hard";
};
