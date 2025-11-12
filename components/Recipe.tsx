import Image from "next/image";
import { Users as UsersIcon, Dot as DotIcon } from "lucide-react";
import type { Recipe } from "@/types/recipes";

type RecipeProps = {
  recipe: Recipe;
};

export default function Recipe({ recipe }: RecipeProps) {
  return (
    <div className="text-[#99a1af] flex flex-col items-center justify-center hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      <Image
        src={recipe.image}
        alt={recipe.name}
        width={350}
        height={230}
        quality={100}
        className="rounded-4xl mb-10 object-cover w-[350px] h-[230px]"
      />
      <div className="text-md  flex flex-col gap-2">
        <div className="flex gap-2 items-center justify-between">
          <h6 className="text-black">{recipe.name}</h6>
          <p>{recipe.timeInMinutes}m</p>
        </div>
        <p>{recipe.description}</p>
        <div className="flex gap-2 items-center">
          <span className="flex gap-2 items-center">
            <UsersIcon size={16} />
            <p>{recipe.servings} servings</p>
          </span>
          <DotIcon />
          <p>{recipe.level.charAt(0).toUpperCase() + recipe.level.slice(1)}</p>
        </div>
      </div>
    </div>
  );
}
