import Brands from "@/components/brands/Brands";
import Hero from "@/components/hero/Hero";
import Intro from "@/components/intro/Intro";

export default function Home() {
  return (
    <div>
      <Hero />
      <Intro />
      <Brands />
    </div>
  );
}