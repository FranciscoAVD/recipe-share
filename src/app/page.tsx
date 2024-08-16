import ChangeItUp from "@/components/landing/change-it-up/change-it-up";
import Header from "@/components/header";
import Hero from "@/components/landing/hero/hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ChangeItUp />
        <section className="h-[600px] bg-neutral-200">
          <div className="container"></div>
        </section>
      </main>
    </>
  );
}
