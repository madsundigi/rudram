"use client";

import { useEffect, useState } from 'react';
import content from "@/app/content/case-stories.json";

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}</span>;
}

export default function CaseStudiesHero() {
  const { pageTitle, pageDescription, stats } = content;

  return (
    <section className="relative w-full py-32 lg:py-48 text-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
         <div className="absolute inset-0 bg-[url('/particles.png')] bg-repeat opacity-10 animate-[pan_20s_linear_infinite]" />
         <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-20 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]" />
      </div>

      <div className="container px-4 md:px-6 relative z-20">
        <div className="space-y-6">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-glow bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 animate-text-reveal"
          >
            {pageTitle}
          </h1>
          <p
            className="max-w-3xl mx-auto text-neutral-200 md:text-xl lg:text-2xl opacity-80 animate-text-reveal"
            style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}
          >
            {pageDescription}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg glass-morphic border border-primary/20 animate-text-reveal"
              style={{ animationDelay: `${0.6 + index * 0.2}s`, animationFillMode: 'backwards' }}
            >
              <h3 className="text-4xl lg:text-5xl font-bold text-primary text-glow">
                <CountUp end={stat.value} />{stat.unit}
              </h3>
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
