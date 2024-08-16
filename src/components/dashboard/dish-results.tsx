"use client";
import { useEffect, useState } from "react";
import { useFilterStore } from "@/stores/filter-store";
import Image from "next/image";
import stock from "../../../public/stock-3.jpg";
import { ClockIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { TDish } from "@/lib/types";
import { useDebounce } from "@/hooks/debounce";
import LoadingSpinner from "../ui/loading-spinner";

export default function DishResults({ results }: { results: TDish[] }) {
  const search = useFilterStore((state) => state.userSearch);
  const [debouncedSearch, loading] = useDebounce(search, 1000);
  const filter = useFilterStore((state) => state.filterDishes);
  const [dishes, setDishes] = useState(results);
  useEffect(() => {
    setDishes(filter(results));
  }, [debouncedSearch]);
  return !loading ? (
    dishes.length > 0 ? dishes.map((d, idx) => (
      <div
        key={idx}
        className="aspect-square bg-neutral-950 rounded-xl shadow-md overflow-hidden"
      >
        <div className="h-[60%] [mask-image:linear-gradient(to_top,transparent,white)]">
          <Image src={stock} alt="" className="h-full object-cover" />
        </div>
        <div className="flex flex-col h-[40%] bg-white p-2">
          <div className="leading-tight">
            <span className="block font-semibold">{d.name}</span>
            <span className="text-sm">{d.cuisine}</span>
          </div>
          <div className="flex justify-between mt-auto">
            <span
              className={cn("", {
                "text-lime-500": d.difficulty === "Beginner",
                "text-yellow-500": d.difficulty === "Intermediate",
                "text-red-500": d.difficulty === "Advanced",
              })}
            >
              {d.difficulty}
            </span>
            <span className="flex items-center gap-x-1">
              <ClockIcon /> {d.prepTime} min
            </span>
          </div>
        </div>
      </div>
    )) : <span className="col-span-full text-5xl ">No results found.</span>
  ) : (
    <LoadingSpinner className="col-span-full mx-auto"/>
  );
}


