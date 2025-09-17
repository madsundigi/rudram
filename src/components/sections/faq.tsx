"use client";

import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import type { FAQGeneratorOutput } from "@/ai/flows/faq-generator";
import { generateAdaptedFaqs } from "@/app/actions";
import { Shield, Rocket, Building2, HardDrive, HelpCircle, Bot } from 'lucide-react';

const initialFaqs = [
  {
    question: "What if I don’t have much data yet?",
    answer: "No problem at all. Many of our clients start with just a handful of spreadsheets or basic reports. We scale our solutions to your current level and show you the simplest starting point. Think of it like building blocks—you don’t need a mountain of data to start making smarter decisions.",
  },
  {
    question: "Do I need new software?",
    answer: "No new software required. We work with what you already use—Excel, Google Sheets, CRMs, ERPs, or custom databases. Our focus is making your current setup smarter, faster, and easier to use. If upgrades are ever needed, we guide you step-by-step—never forcing you into expensive tools.",
  },
  {
    question: "Is this too advanced for my small business?",
    answer: "Not at all. Rudram is built for businesses of every size. Whether you’re a 5-person startup or a mid-sized company, we begin simple—quick wins that save you time and money—then scale as you grow. You’ll never feel overwhelmed; we’ll always keep things in plain language, not jargon.",
  },
  {
    question: "How quickly can we see results?",
    answer: "Fast. With our Data Health Check, you’ll see actionable insights in just 2 weeks. Many clients experience immediate time savings once we simplify reporting. Larger transformations (like Data Apps or strategy rollouts) are phased in so you see value from day one.",
  },
  {
    question: "Is my company’s data safe with you?",
    answer: "Yes. Data security and confidentiality are non-negotiable for us. We sign NDAs with every client, follow strict access controls, and ensure your information never leaves secure environments. Your trust is our priority—we treat your data as if it were our own.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Absolutely. Beyond audits and apps, Rudram is designed as a long-term data partner. We provide advisory sessions, ongoing system upgrades, and continuous support—so you’re never left alone after setup. Think of us as your ‘data team on call.’",
  },
];

const faqIcons: { [key: number]: React.ReactNode } = {
  0: <HelpCircle className="h-6 w-6 text-primary" />,
  1: <HardDrive className="h-6 w-6 text-primary" />,
  2: <Building2 className="h-6 w-6 text-primary" />,
  3: <Rocket className="h-6 w-6 text-primary" />,
  4: <Shield className="h-6 w-6 text-primary" />,
  5: <Bot className="h-6 w-6 text-primary" />,
};

export default function Faq() {
  const [adaptedFaqs, setAdaptedFaqs] = useState<FAQGeneratorOutput["adaptedFaqs"] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getFaqs() {
      try {
        const result = await generateAdaptedFaqs({ faqs: initialFaqs });
        setAdaptedFaqs(result.adaptedFaqs);
      } catch (e) {
        console.error("Failed to generate FAQs:", e);
        setError("Could not load AI-enhanced FAQs. Displaying standard content.");
        const fallbackFaqs = initialFaqs.map(faq => ({ ...faq, microCta: "Learn More"}));
        setAdaptedFaqs(fallbackFaqs);
      } finally {
        setIsLoading(false);
      }
    }
    getFaqs();
  }, []);

  const renderFaqs = isLoading || !adaptedFaqs
    ? Array(5).fill(0).map((_, i) => (
        <div key={i} className="mb-4 p-4 rounded-lg glass-morphic border border-primary/20">
          <Skeleton className="h-8 w-3/4" />
        </div>
      ))
    : adaptedFaqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="mb-4 rounded-lg glass-morphic border-primary/20 border-b-0 data-[state=open]:border data-[state=open]:shadow-lg data-[state=open]:shadow-primary/20">
          <AccordionTrigger className="p-6 text-lg font-semibold hover:no-underline text-left">
            <div className="flex items-center gap-4">
              {faqIcons[index] || <HelpCircle className="h-6 w-6 text-primary" />}
              <span>{faq.question}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-6 pt-0">
            <p className="text-muted-foreground mb-4">{faq.answer}</p>
            {faq.microCta && (
              <Button variant="link" className="p-0 text-primary h-auto text-base text-glow">
                {faq.microCta}
              </Button>
            )}
          </AccordionContent>
        </AccordionItem>
      ));

  return (
    <section id="faq" className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground/90 to-foreground/60">
            Killing Objections
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">
            Your questions, answered with clarity.
          </p>
          {error && <p className="text-destructive">{error}</p>}
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {renderFaqs}
          </Accordion>
        </div>

        <div className="mt-20 text-center p-8 rounded-lg glass-morphic border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <Button size="lg" className="btn-glow px-8 py-6 text-lg">
                Book Your Free Intro Call
            </Button>
        </div>
      </div>
    </section>
  );
}
