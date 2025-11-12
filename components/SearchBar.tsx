"use client";

import { Search as SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") ?? "");

  // debounce the search to avoid too many API calls
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        router.push(`/?query=${encodeURIComponent(query.trim())}`);
      } else {
        router.push("/");
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query, router]);

  return (
    <div className="flex items-center justify-center sm:w-3xl">
      <div className="relative w-full max-w-xl">
        <SearchIcon className="text-[#D1D5DB] absolute left-6 top-1/2 -translate-y-1/2" />
        <Input
          className="ml-1 rounded-full bg-white p-8 pl-15"
          type="text"
          placeholder="Search by recipe, ingredient, or cuisine name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></Input>
      </div>
    </div>
  );
}
