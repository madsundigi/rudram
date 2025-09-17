import CaseStudiesHero from "@/components/sections/case-studies/case-studies-hero";
import FeaturedStory from "@/components/sections/case-studies/featured-story";
import StoryGrid from "@/components/sections/case-studies/story-grid";
import RoiVisual from "@/components/sections/case-studies/roi-visual";
import TestimonialCarousel from "@/components/sections/case-studies/testimonial-carousel";
import CtaBanner from "@/components/sections/shared/cta-banner";

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <div className="relative z-10 bg-background">
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background via-primary/10 to-accent/10"></div>
          <div 
            className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-repeat"
            style={{ maskImage: 'radial-gradient(ellipse at center, white 20%, transparent 70%)' }}
          ></div>
        </div>
        <CaseStudiesHero />
        <FeaturedStory />
        <StoryGrid />
        <RoiVisual />
        <TestimonialCarousel />
        <CtaBanner />
      </div>
    </div>
  );
}
