import Hero from "@/components/hero/Hero";
import Intro from "@/components/intro/Intro";
import MobileIntro from "@/components/intro/MobileIntro";
import Expertise from "@/components/expertise/Expertise";
import ContentScoring from "@/components/contentScoring/ContentScoring";
import Brands from "@/components/brands/Brands";
import { Motorbike } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* <Hero />
      <Intro />
      <MobileIntro />
      <Expertise /> */}
      <ContentScoring />
      <Brands />
    </div>
  );
}