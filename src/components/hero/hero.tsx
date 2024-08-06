import Image from "next/image";
import bg from "../../../public/stock-2.jpg";
import { Button } from "../ui/button";
import { RecipeCarousel } from "./preview-recipes";
export default function Hero() {
  return (
    <section className="relative h-[700px] overflow-hidden bg-neutral-950">
      <div className="absolute inset-0 ">
        <Image
          src={bg}
          alt="preparing food"
          className="h-full object-cover [mask-image:linear-gradient(to_top,transparent_10%,white)]"
        />
      </div>
      <div className="absolute inset-0 z-10 grid place-content-center gap-y-10 text-center">
        <div className="space-y-2">
          <span className="block w-fit bg-white/50 backdrop-blur-sm font-semibold mx-auto py-1 px-4 rounded-full">
            Join our community
          </span>
          <h1 className="text-7xl font-semibold text-white">
            Discover <span className="italic text-yellow-500">new</span> recipes
          </h1>
          <p className="max-w-sm mx-auto text-lg text-white/90 font-medium">
            Find recipes from all over the world. Shared by people like you!
          </p>
        </div>
        <Button className="w-[200px] bg-lime-600 hover:bg-lime-700 mx-auto">
          Get Started
        </Button>
      </div>
    </section>
  );
}
