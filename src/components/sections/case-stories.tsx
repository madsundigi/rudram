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
import caseStoriesContent from "@/app/content/case-stories.json";

const icons: { [key: string]: React.ReactNode } = {
  "before-spreadsheet": <Sheet className="h-8 w-8 text-red-400" />,
  "after-dashboard": <LayoutDashboard className="h-8 w-8 text-green-400" />,
  "before-waste": <TrendingUp className="h-8 w-8 text-red-400 -scale-y-100" />,
  "after-tracking": <TrendingUp className="h-8 w-8 text-green-400" />,
  "before-contacts": <Users className="h-8 w-8 text-red-400" />,
  "after-crm": <UserCheck className="h-8 w-8 text-green-400" />,
};


export default function CaseStories() {
  return (
    <section id="cases" className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground/90 to-foreground/60">
            {caseStoriesContent.headline}
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">
            {caseStoriesContent.subheadline}
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
            {caseStoriesContent.stories.map((study, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col glass-morphic card-glow border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-primary text-lg font-semibold">{study.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center justify-around text-center text-sm">
                          <div className="flex flex-col items-center gap-2">
                            {icons[study.visuals.before.icon]}
                            <span>{study.challenge}</span>
                          </div>
                          <ArrowRight className="h-6 w-6 text-primary/50" />
                          <div className="flex flex-col items-center gap-2">
                            {icons[study.visuals.after.icon]}
                            <span>{study.solution}</span>
                          </div>
                        </div>
                        <div className="text-center py-4">
                          <p className="text-3xl font-bold text-primary text-glow">{study.result.metric}</p>
                        </div>
                        <p className="text-muted-foreground text-sm">{study.result.description}</p>
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
                {caseStoriesContent.cta.text}
            </Button>
        </div>
      </div>
    </section>
  );
}
