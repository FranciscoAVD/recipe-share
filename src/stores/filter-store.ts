import { create } from "zustand";
import { TDish } from "@/lib/types";
type TFilterStore = {
  userSearch: string;
  setUserSearch: (input: string) => void;
  filterDishes: (dishes: TDish[]) => TDish[];
//   dishes: TDish[];
//   setDishes: (dishes: TDish[]) => void;
};
export const useFilterStore = create<TFilterStore>((set, get) => ({
  userSearch: "",
  setUserSearch: (input) => set(() => ({ userSearch: input })),
  filterDishes: (dishes) => {
    if (!get().userSearch) return dishes;
    return dishes.filter((dish) => dish.name.includes(get().userSearch));
  },
}));
