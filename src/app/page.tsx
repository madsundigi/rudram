import HeroSection from "@/components/sections/hero";
import ClarityPath from "@/components/sections/clarity-path";
import WhyUs from "@/components/sections/why-us";
import CaseStories from "@/components/sections/case-stories";
import Team from "@/components/sections/team";
import Faq from "@/components/sections/faq";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <HeroSection />
      <div className="relative z-10 bg-background">
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background via-primary/10 to-accent/10"></div>
          <div 
            className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-repeat"
            style={{ maskImage: 'radial-gradient(ellipse at center, white 20%, transparent 70%)' }}
          ></div>
        </div>
        <ClarityPath />
        <WhyUs />
        <CaseStories />
        <Team />
        <Faq />
        <Contact />
      </div>
    </div>
  );
}
