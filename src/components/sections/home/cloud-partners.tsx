
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import content from "@/app/content/partners.json";

const AwsLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" className="h-12 w-auto text-white">
        <path fill="#FF9900" d="M22.035 88.75c-3.14 0-5.85.47-8.12 1.41-2.27.94-4.12 2.3-5.56 4.07-1.44 1.76-2.16 3.8-2.16 6.12 0 3.32.99 6.13 2.97 8.41 1.98 2.28 4.43 3.42 7.35 3.42 2.82 0 5.26-.85 7.33-2.57 2.07-1.71 3.48-3.9 4.23-6.55l-8.07-.85c-.52 1.48-1.33 2.6-2.4 3.38-1.08.78-2.31.18-3.68-.86-1.37-1.04-2.05-2.4-2.05-4.07 0-1.3.4-2.4 1.18-3.32.78-.92 1.86-1.52 3.23-1.83 1.36-.3 3.2-.46 5.52-.46h5.83v-5.2h-5.75z"></path>
        <path fill="#fff" d="M22.035 44.885c-.44 0-.88 0-1.32.03l-5.96-3.44a33.09 33.09 0 000-5.88l5.96-3.44c.44.03.88.03 1.32.03l5.83-3.34a26.6 26.6 0 012.3-1.32l-3.43 6c-2.3.03-4.5.03-5.85.03l-5.85 3.37a28.2 28.2 0 010 5.9l5.85 3.38c1.35 0 3.55 0 5.85-.04l3.43 6a26.6 26.6 0 01-2.3-1.32l-5.83-3.34z"></path>
        <path fill="#FF9900" d="M51.335 28.915c-2.08 0-3.92.33-5.55 1s-2.9 1.68-3.8 3.05-1.35 2.9-1.35 4.59c0 1.25.18 2.4.52 3.48.34 1.07.92 2.05 1.73 2.94l15.1 16.3c1.15 1.25 2.6 2.22 4.38 2.9 1.77.68 3.7.98 5.8.98 2.08 0 3.92-.33 5.55-.98s2.9-1.68 3.8-3.05 1.35-2.9 1.35-4.59c0-1.25-.18-2.4-.52-3.48-.34-1.07-.92-2.05-1.73-2.94l-15.1-16.3a10.9 10.9 0 00-4.38-2.9c-1.77-.7-3.7-.98-5.8-.98zM51.335 15.33c3.22 0 6.13.66 8.7 2 2.56 1.33 4.6 3.25 6.08 5.75 1.48 2.5 2.2 5.2 2.2 7.73 0 2-.36 3.88-1 5.65-.63 1.77-1.55 3.3-2.79 4.7l-2.08-2.2c1-1.15 1.83-2.3 2.4-3.66.58-1.36.87-2.8.87-4.29 0-1.84-.47-3.5-1.4-5.1-1-1.6-2.3-2.9-4.1-3.8s-3.7-.9-5.8-.9-4.02.3-5.8.9-3.1 1.6-4.1 3.8c-.94 1.6-1.4 3.26-1.4 5.1 0 1.52.29 2.95.87 4.29.58 1.36 1.45 2.51 2.4 3.66l-2.07 2.2c-1.25-1.4-2.17-2.93-2.8-4.7-.63-1.77-.99-3.63-.99-5.65 0-2.53.72-5.23 2.2-7.73 1.48-2.5 3.5-4.42 6.08-5.75 2.57-1.34 5.48-2 8.7-2z"></path>
        <path fill="#fff" d="M92.265 67.315a28.2 28.2 0 010-5.91l-5.83 3.38c-.44.23-.88.43-1.32.6l-5.95 3.44a33.09 33.09 0 000 5.88l5.95 3.44c.44.17.88.37 1.32.56l5.83-3.38a28.2 28.2 0 010-5.91l5.83-3.34a26.6 26.6 0 01-2.3-1.32l-3.53 2.04zM73.515 58.765l-3.44 6c.78.37 1.55.77 2.3 1.2l5.85-3.38c-1.55-.06-3.75-.1-5.86-.1l-5.8-3.34a28.2 28.2 0 015.8-.03l5.83-3.35a26.6 26.6 0 01-2.3-1.32l-3.44 6z"></path>
        <path fill="#FF9900" d="M49.595 89.155a4.4 4.4 0 01-1.8 3.48c-1.15 1.04-2.5 1.35-4.1 1.04-1.36-.3-2.5-.99-3.44-2.07s-1.48-2.33-1.63-3.8l-7.73 1.15c.75 2.65 2.15 4.88 4.22 6.7s4.6 2.7 7.52 2.7c3.14 0 5.85-.47 8.12-1.41s4.12-2.3 5.56-4.07a10.3 10.3 0 003.32-7.15c0-3.32-.99-6.13-2.97-8.41-1.98-2.28-4.43-3.42-7.35-3.42-2.82 0-5.26.85-7.33-2.57-2.07-1.71-3.48-3.9-4.23-6.55l8.07-.85c.52 1.48 1.33 2.6 2.4 3.38 1.08.78 2.31.18 3.68-.86 1.37-1.04 2.05-2.4 2.05-4.07z"></path>
    </svg>
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

    