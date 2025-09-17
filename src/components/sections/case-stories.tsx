"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sheet, LayoutDashboard, UserCheck, Users, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    category: "Retail",
    before: "Chaotic spreadsheets",
    after: "Live sales dashboards",
    iconBefore: <Sheet className="h-8 w-8 text-red-400" />,
    iconAfter: <LayoutDashboard className="h-8 w-8 text-green-400" />,
    stat: "80% Time Saved",
    description: "Automated reporting freed up the sales team to focus on customers, not data entry.",
  },
  {
    category: "Manufacturing",
    before: "Costly material leaks",
    after: "Real-time waste tracking",
    iconBefore: <TrendingUp className="h-8 w-8 text-red-400 -scale-y-100" />,
    iconAfter: <TrendingUp className="h-8 w-8 text-green-400" />,
    stat: "15% Cost Reduction",
    description: "Pinpointed inefficiencies in the production line, leading to significant material savings.",
  },
  {
    category: "Real Estate",
    before: "Disorganized contacts",
    after: "Automated CRM",
    iconBefore: <Users className="h-8 w-8 text-red-400" />,
    iconAfter: <UserCheck className="h-8 w-8 text-green-400" />,
    stat: "40% Faster Follow-ups",
    description: "Streamlined client management, ensuring no lead was left behind and improving client relations.",
  },
];

export default function CaseStories() {
  return (
    <section id="cases" className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground/90 to-foreground/60">
            From Messy to Meaningful
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">
            See how we've transformed businesses like yours.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {caseStudies.map((study, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col glass-morphic card-glow border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-primary text-lg font-semibold">{study.category}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center justify-around text-center text-sm">
                          <div className="flex flex-col items-center gap-2">
                            {study.iconBefore}
                            <span>{study.before}</span>
                          </div>
                          <ArrowRight className="h-6 w-6 text-primary/50" />
                          <div className="flex flex-col items-center gap-2">
                            {study.iconAfter}
                            <span>{study.after}</span>
                          </div>
                        </div>
                        <div className="text-center py-4">
                          <p className="text-3xl font-bold text-primary text-glow">{study.stat}</p>
                        </div>
                        <p className="text-muted-foreground text-sm">{study.description}</p>
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

        <div className="mt-16 text-center">
            <Button size="lg" className="btn-glow bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-center animate-gradient-shift">
                See What We Can Do For You
            </Button>
        </div>
      </div>
    </section>
  );
}
