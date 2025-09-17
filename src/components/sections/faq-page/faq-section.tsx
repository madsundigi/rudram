
"use client";

import React, { useState, useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Rocket, Building2, HardDrive, HelpCircle, Bot, Search } from 'lucide-react';
import faqContent from "@/app/content/faq.json";
import { FreeIntroCallModal } from "@/components/modals/free-intro-call-modal";

const faqIcons: { [key: string]: React.ReactNode } = {
  "data-volume": <HelpCircle className="h-6 w-6 text-primary" />,
  "software": <HardDrive className="h-6 w-6 text-primary" />,
  "business-size": <Building2 className="h-6 w-6 text-primary" />,
  "results-speed": <Rocket className="h-6 w-6 text-primary" />,
  "data-security": <Shield className="h-6 w-6 text-primary" />,
  "support": <Bot className="h-6 w-6 text-primary" />,
};

export default function FaqSection() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredFaqs = useMemo(() => {
        if (!searchTerm) return faqContent.faqs;
        return faqContent.faqs.filter(faq => 
            faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

  return (
    <section id="faq-page" className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground/90 to-foreground/60 text-glow">
            {faqContent.headline}
          </h1>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">
            {faqContent.subheadline}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
            <div className="relative mb-12">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                    type="text"
                    placeholder="Type a question..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-6 text-lg bg-background/50 border-primary/20 focus:bg-background focus:ring-primary"
                />
            </div>
          <Accordion type="single" collapsible className="w-full">
            {filteredFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="mb-4 rounded-lg glass-morphic border-primary/20 border-b-0 data-[state=open]:border data-[state=open]:shadow-lg data-[state=open]:shadow-primary/20 transition-all duration-300 hover:border-primary/50 hover:shadow-primary/10">
                <AccordionTrigger className="p-6 text-lg font-semibold hover:no-underline text-left transition-colors hover:text-primary">
                  <div className="flex items-center gap-4">
                    {faqIcons[faq.icon] || <HelpCircle className="h-6 w-6 text-primary" />}
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <p className="text-muted-foreground mb-4">{faq.answer}</p>
                   {/* Here you could add a micro-CTA if it existed in your faq.json */}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {filteredFaqs.length === 0 && (
            <p className="text-center text-muted-foreground mt-12">No questions found. Try a different search.</p>
          )}
        </div>

        <div className="mt-20 text-center p-8 rounded-lg glass-morphic border-primary/20">
            <h3 className="text-2xl font-bold mb-4">{faqContent.cta.headline}</h3>
            <FreeIntroCallModal>
                <Button size="lg" className="btn-glow px-8 py-6 text-lg">
                    Book a 30-Min Call
                </Button>
            </FreeIntroCallModal>
        </div>
      </div>
    </section>
  );
}
