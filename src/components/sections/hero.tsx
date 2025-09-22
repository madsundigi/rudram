
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import heroContent from "@/app/content/hero.json";
import { HealthCheckModal } from "@/components/modals/health-check-modal";
import { StartJourneyModal } from "@/components/modals/start-journey-modal";
import { cn } from "@/lib/utils";

const heroImages = PlaceHolderImages.filter(img => img.id.startsWith('hero-'));

export default function HeroSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const plugin = useRef(
      Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  useEffect(() => {
    if (!api) {
      return
    }
    
    setCurrent(api.selectedScrollSnap());
    
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const slides = heroContent.slides;

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{ loop: true }}
      >
        <div className="absolute inset-0 w-full h-full z-0">
            <CarouselContent className="h-full" effect="fade">
                {heroImages.map((image, index) => (
                <CarouselItem key={index} className="h-full">
                    <div className="w-full h-full relative overflow-hidden">
                    <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover animate-zoom"
                        data-ai-hint={image.imageHint}
                        priority={index === 0}
                    />
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />

        <div className="absolute inset-0 bg-[url('/particles.png')] bg-repeat opacity-10 animate-[pan_20s_linear_infinite]" />

        <div className="container px-4 md:px-6 relative z-20">
            <div className="relative h-48 md:h-64">
                 {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={cn(
                            "absolute inset-0 flex flex-col justify-center items-center space-y-6 transition-opacity duration-1000",
                            current === index ? "opacity-100" : "opacity-0"
                        )}
                        aria-hidden={current !== index}
                    >
                        <h1
                            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-glow bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300"
                        >
                            {slide.headline}
                        </h1>
                        <p
                            className="max-w-3xl mx-auto text-neutral-200 md:text-xl lg:text-2xl opacity-80"
                        >
                            {slide.subheadline}
                        </p>
                    </div>
                ))}
            </div>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 animate-text-reveal"
            style={{ animationDelay: '0.8s', animationFillMode: 'backwards' }}
          >
            <HealthCheckModal defaultServiceId="health-check">
              <Button size="lg" className="btn-glow text-lg px-8 py-6 bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 border border-teal-300/50 text-white">
                {slides[current]?.cta.primary.text || "Book a Data Health Check"}
              </Button>
            </HealthCheckModal>
            <StartJourneyModal>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 glass-morphic border-white/50 hover:border-white text-white hover:bg-white/10">
                {slides[current]?.cta.secondary.text || "See How It Works"}
              </Button>
            </StartJourneyModal>
          </div>
        </div>
         <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 glass-morphic border-primary/50 hover:bg-primary/20" />
         <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 glass-morphic border-primary/50 hover:bg-primary/20" />
      </Carousel>
    </section>
  );
}
