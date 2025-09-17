"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
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

const heroImages = PlaceHolderImages.filter(img => img.id.startsWith('hero-'));

export default function HeroSection() {
  const [api, setApi] = React.useState<CarouselApi>()
  const plugin = useRef(
      Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  useEffect(() => {
    if (!api) {
      return
    }
  }, [api])


  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          className="w-full h-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{ loop: true }}
        >
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
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 glass-morphic border-primary/50 hover:bg-primary/20" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 glass-morphic border-primary/50 hover:bg-primary/20" />
        </Carousel>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />

      <div className="absolute inset-0 bg-[url('/particles.png')] bg-repeat opacity-10 animate-[pan_20s_linear_infinite]" />

      <div className="container px-4 md:px-6 relative z-20">
        <div className="space-y-6">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-glow bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 animate-text-reveal"
            style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}
          >
            {heroContent.headline}
          </h1>
          <p
            className="max-w-3xl mx-auto text-neutral-200 md:text-xl lg:text-2xl opacity-80 animate-text-reveal"
            style={{ animationDelay: '0.5s', animationFillMode: 'backwards' }}
          >
            {heroContent.subheadline}
          </p>
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-text-reveal"
            style={{ animationDelay: '0.8s', animationFillMode: 'backwards' }}
          >
            <HealthCheckModal>
              <Button size="lg" className="btn-glow text-lg px-8 py-6 bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 border border-teal-300/50 text-white">
                {heroContent.cta.primary.text}
              </Button>
            </HealthCheckModal>
            <StartJourneyModal>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 glass-morphic border-white/50 hover:border-white text-white hover:bg-white/10">
                {heroContent.cta.secondary.text}
              </Button>
            </StartJourneyModal>
          </div>
        </div>
      </div>
    </section>
  );
}
