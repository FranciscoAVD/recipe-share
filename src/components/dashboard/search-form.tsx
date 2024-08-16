"use client";
import { useFilterStore } from "@/stores/filter-store";
import { Input } from "../ui/input";
import { useDebounce } from "@/hooks/debounce"
export default function SearchForm() {
    const search = useFilterStore(state => state.userSearch);
    const set = useFilterStore(state => state.setUserSearch);
  return (
    <form action="">
      <label htmlFor="" className="font-medium text-sm">
        Search for a dish
      </label>
      <Input placeholder="Spicy crab rolls" value={search} onChange={e => set(e.target.value)}/>
    </form>
  );
}
