import Image from "next/image";
import { Users as UsersIcon, Dot as DotIcon } from "lucide-react";
import type { Recipe } from "@/types/recipes";
import { cleanAndTruncateSummary } from "@/lib/utils";

type RecipeProps = {
  recipe: Recipe;
};

export default function Recipe({ recipe }: RecipeProps) {
  return (
    <div className="text-[#99a1af] flex flex-col items-center justify-center hover:-translate-y-2 transition-all duration-300 cursor-pointer w-[350px]">
      <Image
        src={recipe.image}
        alt={recipe.title}
        width={350}
        height={230}
        quality={100}
        className="rounded-4xl mb-10 object-cover w-[350px] h-[230px]"
      />
      <div className="text-md flex flex-col gap-2 w-full">
        <div className="flex gap-2 items-center justify-between">
          <h6 className="text-black truncate flex-1">{recipe.title}</h6>
          <p className="shrink-0">{recipe.readyInMinutes}m</p>
        </div>
        <p>{cleanAndTruncateSummary(recipe.summary || "", 150)}</p>
        <div className="flex gap-2 items-center">
          <span className="flex gap-2 items-center">
            <UsersIcon size={16} />
            <p>{recipe.servings} servings</p>
          </span>
          <DotIcon />
          <p>
            {recipe?.level?.charAt(0).toUpperCase() + recipe?.level?.slice(1) ||
              "Easy"}
          </p>
        </div>
      </div>
    </div>
  );
}
