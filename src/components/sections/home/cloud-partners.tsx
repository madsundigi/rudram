
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import content from "@/app/content/partners.json";

const AwsLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="currentColor" className="h-12 w-auto text-white">
      <path d="M24.89 63.32c-3.13 0-5.83.47-8.1 1.42s-4.12 2.3-5.55 4.07a10.3 10.3 0 00-3.32 7.15c0 3.32.99 6.13 2.97 8.42s4.43 3.44 7.37 3.44c2.81 0 5.25-.86 7.32-2.58s3.47-3.9 4.22-6.55l-8.05-.86c-.52 1.48-1.32 2.61-2.4 3.39s-2.3.18-3.67-.86a4.4 4.4 0 01-1.8-3.48c0-1.3.4-2.4 1.18-3.32s1.86-1.52 3.22-1.83c1.36-.3 3.2-.46 5.52-.46h5.83v-5.2h-5.75zM22.03 26.9a26.6 26.6 0 01-1.32 2.33l-5.95-3.44a33.1 33.1 0 000-5.88l5.95-3.44a26.6 26.6 0 011.32 2.33L16.2 21a28.2 28.2 0 010 5.91l5.83-.01z"></path>
      <path d="M51.33 13.59c-2.07 0-3.92.34-5.55 1s-2.9 1.68-3.8 3.05S40.6 20.8 40.6 22.9c0 1.25.18 2.41.52 3.48s.92 2.05 1.73 2.94l15.1 16.3c1.15 1.25 2.61 2.22 4.38 2.9s3.7.99 5.8.99c2.07 0 3.92-.33 5.55-.99s2.9-1.68 3.8-3.05 1.35-2.9 1.35-4.59c0-1.25-.18-2.4-.52-3.48s-.92-2.05-1.73-2.94l-15.1-16.3a10.9 10.9 0 00-4.38-2.9c-1.77-.7-3.7-.99-5.8-.99zM51.33 0c3.22 0 6.13.67 8.7 2s4.6 3.25 6.08 5.75a16.3 16.3 0 012.2 7.73c0 2-.37 3.88-.99 5.65s-1.55 3.3-2.79 4.7l-2.07-2.2c1-1.15 1.83-2.3 2.4-3.66s.9-2.8.9-4.29a10.3 10.3 0 00-1.4-5.1c-1-1.6-2.3-2.9-4.1-3.8s-3.7-.9-5.8-.9-4.01.3-5.8.9-3.1 1.6-4.1 3.8a10.3 10.3 0 00-1.4 5.1c0 1.52.3 2.95.9 4.29s1.45 2.51 2.4 3.66l-2.07 2.2a12.1 12.1 0 01-2.8-4.7c-.6-1.77-1-3.63-1-5.65a16.3 16.3 0 012.2-7.73c1.48-2.5 3.5-4.43 6.08-5.75s5.48-2 8.7-2zM92.27 49.33a28.2 28.2 0 010-5.91L86.44 49a26.6 26.6 0 01-1.32-2.33l-5.95 3.44a33.1 33.1 0 000 5.88l5.95 3.44a26.6 26.6 0 011.32-2.33l5.83-.01z"></path>
      <path d="M49.6 63.74a4.4 4.4 0 01-1.8 3.48c-1.15 1.04-2.51 1.35-4.1 1.04-1.36-.3-2.51-1-3.44-2.07s-1.48-2.33-1.63-3.8l-7.73 1.15c.75 2.65 2.15 4.88 4.22 6.7s4.59 2.7 7.52 2.7c3.13 0 5.83-.47 8.1-1.42s4.12-2.3 5.55-4.07a10.3 10.3 0 003.32-7.15c0-3.32-.99-6.13-2.97-8.42s-4.43-3.44-7.37-3.44c-2.81 0-5.25.86-7.32 2.58s-3.47 3.9-4.22 6.55l8.05.86c.52-1.48 1.32-2.61 2.4-3.39s2.3-.18 3.67.86zM28.31 43.43a28.2 28.2 0 01-5.8-.03l-5.83-3.35a26.6 26.6 0 012.3-1.32l3.44 6L28.31 43.4zM73.52 43.43a28.2 28.2 0 015.8-.03l5.83-3.35a26.6 26.6 0 01-2.3-1.32l-3.44 6L73.52 43.4z"></path>
    </svg>
);

const MicrosoftLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" fill="currentColor" className="h-10 w-auto text-white">
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
