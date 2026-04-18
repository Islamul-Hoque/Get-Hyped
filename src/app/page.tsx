import Hero from "@/components/hero/Hero";
import Intro from "@/components/intro/Intro";
import Expertise from "@/components/expertise/Expertise";
import ContentScoring from "@/components/contentScoring/ContentScoring";
import Brands from "@/components/brands/Brands";

export default function Home() {
  return (
    <div>
      <Hero />
      <Intro />
      <Expertise />
      <ContentScoring />
      <Brands />
    </div>
  );
}