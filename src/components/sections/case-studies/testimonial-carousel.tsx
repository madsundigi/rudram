"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import content from "@/app/content/case-stories.json";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Link from "next/link";

export default function TestimonialCarousel() {
    const { testimonials, cta } = content;
    const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <section id="testimonials" className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[plugin.current]}
          className="w-full max-w-4xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="glass-morphic border-primary/20">
                    <CardContent className="p-8 text-center space-y-6">
                      <MessageSquare className="h-12 w-12 text-primary mx-auto text-glow"/>
                      <p className="text-xl lg:text-2xl text-muted-foreground font-light leading-snug">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <div className="flex items-center justify-center gap-4">
                        <Image src={testimonial.logo} alt={`${testimonial.company} logo`} width={100} height={40} className="object-contain" />
                        <span className="font-semibold text-foreground">{testimonial.company}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="glass-morphic border-primary/50 hover:bg-primary/20" />
          <CarouselNext className="glass-morphic border-primary/50 hover:bg-primary/20" />
        </Carousel>
        
        <div className="mt-20 text-center p-8 rounded-2xl glass-morphic border-2 border-primary/30 shadow-2xl shadow-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6 text-glow bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-300">
                {cta.headline}
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href={cta.primaryCta.href}>
                    <Button size="lg" className="btn-glow text-lg px-8 py-6 bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 border border-teal-300/50 text-white animate-pulse-glow">
                        {cta.primaryCta.text}
                    </Button>
                </Link>
                <Link href={cta.secondaryCta.href}>
                    <Button size="lg" variant="outline" className="text-lg px-8 py-6 glass-morphic border-white/50 hover:border-white text-white hover:bg-white/10">
                        {cta.secondaryCta.text}
                    </Button>
                </Link>
            </div>
        </div>

      </div>
    </section>
  );
}
