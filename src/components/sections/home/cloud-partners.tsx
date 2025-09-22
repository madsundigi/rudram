"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import content from "@/app/content/partners.json";
import Image from "next/image";

const AwsLogo = () => (
    <Image src="/images/aws.jpg" alt="AWS Logo" width={80} height={48} className="h-12 w-auto" />
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
    <Image src="/images/xero.png" alt="Xero Logo" width={80} height={40} className="h-10 w-auto" />
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
