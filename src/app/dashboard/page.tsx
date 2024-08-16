
import { TDish } from "@/lib/types";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import DishResults from "@/components/dashboard/dish-results";
export default async function DashboardPage() {
  const res = await fetch("http://localhost:4000/api/dishes/");
  const dishes: TDish[] = await res.json();
  return (
    <>
      <DashboardHeader />
      <main className="bg-neutral-100 min-h-screen">
      <section className="py-10">
          <div className="container grid grid-cols-5 gap-6">
            <DishResults results={dishes} />
          </div>
        </section>
      </main>
    </>
  );
}
