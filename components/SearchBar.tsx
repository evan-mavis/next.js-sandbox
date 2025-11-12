import { Search as SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

export default function SearchBar() {
  return (
    <div className="flex items-center justify-center sm:w-3xl">
      <div className="relative w-full max-w-xl">
        <SearchIcon className="text-[#D1D5DB] absolute left-6 top-1/2 -translate-y-1/2" />
        <Input
          className="ml-1 rounded-full bg-white p-8 pl-15"
          type="text"
          placeholder="Search by recipe, ingredient, or cuisine name..."
        ></Input>
      </div>
    </div>
  );
}
