"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import content from "@/app/content/partners.json";

const AwsLogo = () => (
    <img src="/images/AWS.svg" alt="AWS Logo" className="h-12 w-auto" />
);

const MicrosoftLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" fill="currentColor" className="h-10 w-auto">
        <path fill="#f25022" d="M1 1h9v9H1z"/>
        <path fill="#7fba00" d="M11 1h9v9h-9z"/>
        <path fill="#00a4ef" d="M1 11h9v9H1z"/>
        <path fill="#ffb900" d="M11 11h9v9h-9z"/>
    </svg>
);

const XeroLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-10 w-auto text-white">
        <path d="M15.72 4.453c-1.52.016-2.693 1.258-2.73 2.793.016 1.55 1.223 2.809 2.762 2.824 1.539-.015 2.762-1.273 2.746-2.824-.016-1.535-1.238-2.777-2.774-2.793zm-9.457 0c-1.52.016-2.693 1.258-2.73 2.793.016 1.55 1.223 2.809 2.762 2.824 1.539-.015 2.762-1.273 2.746-2.824-.016-1.535-1.238-2.777-2.774-2.793zm5.006 14.545c-2.707 0-4.998-2.292-5-5.02h2.95c.015 1.156.96 2.074 2.125 2.062 1.164.012 2.11-.906 2.125-2.062 0-1.156-.96-2.074-2.125-2.062H4.998V8.98h6.121c2.707 0 4.998 2.291 5 5.019a5.01 5.01 0 0 1-5.006 5.02z" />
    </svg>
);


const logos: { [key: string]: React.ReactNode } = {
  aws: <AwsLogo />,
  microsoft: <MicrosoftLogo />,
  xero: <XeroLogo />,
};

const PartnerCard = ({ partner }: { partner: typeof content.partners[0] }) => (
    <Card className="glass-morphic card-glow border-primary/20 flex flex-col items-center p-6 text-center h-full transition-all duration-300 ease-in-out hover:-translate-y-2">
        <CardHeader className="p-0 mb-4 items-center">
            <div className="h-16 flex items-center justify-center">
              {logos[partner.logo]}
            </div>
        </CardHeader>
        <CardContent className="p-0 flex-grow">
            <p className="text-muted-foreground">{partner.description}</p>
        </CardContent>
    </Card>
);

export default function CloudPartners() {
  return (
    <section id="partners" className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground/90 to-foreground/60">
            {content.headline}
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">
            {content.subheadline}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {content.partners.map((partner) => (
            <PartnerCard key={partner.name} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
