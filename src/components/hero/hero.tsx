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
      <div className="absolute inset-0 z-10 grid place-content-center gap-y-4 text-center">
        <div>
          <span className="block w-fit bg-white/50 backdrop-blur-sm font-semibold mx-auto py-1 px-4 rounded-full">
            Join our community
          </span>
          <h1 className="text-7xl font-semibold text-white">
            Discover <span className="italic text-yellow-500">new</span> recipes
          </h1>
        </div>

        <p className="max-w-sm mx-auto text-lg text-white/90 font-medium">
          Find recipes from all parts of the world shared by people like you!
        </p>
        <Button className="w-[200px] bg-lime-600 mx-auto">Get Started</Button>
      </div>
    </section>
  );
}
