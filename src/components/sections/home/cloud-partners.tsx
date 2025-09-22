
"use client";

import content from "@/app/content/partners.json";

const AwsLogo = () => (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:text-[#FF9900] transition-colors duration-300">
        <path d="M11.083 16.155c.394.444.985.444 1.379 0l.298-.334c.789-.887.32-1.55-.444-1.55h-1.48c-.764 0-1.233.663-.453 1.55l.298.334zM.846 11.458c.532-1.39 1.48-1.39 2.012 0l.477 1.25c.532 1.39-.06 2.338-1.506 2.338-.845 0-1.506-.39-1.506-1.163v-1.175c0-.773.66-1.163 1.506-1.163h.017zm13.12 6.556c-1.21 1.055-2.73 1.637-4.22 1.637s-3.01-.582-4.22-1.637c-.328-.285-.515-.705-.515-1.133V13.6c0-1.385 1.408-2.455 3.06-2.455h3.35c1.652 0 3.06 1.07 3.06 2.456v3.28c0 .428-.187.848-.515 1.132zM12.23 6.945l-2.193 3.61c-.22.36-.04.81.32 1.00s.80.03 1.02-.33l1.34-2.20 1.34 2.20c.22.36.68.51 1.02.33s.54-.64.32-1.00L12.23 6.95zM22.01 5.37c-.227-.375-.59-.625-1.01-.625h-2.12c-.42 0-.782.25-1.008.625l-2.02 3.326c-.226.375-.045.86.33 1.05.375.19.832.044 1.057-.33l1.126-1.854 1.125 1.853c.226.375.682.52 1.057.33.375-.188.556-.673.33-1.05l-2.018-3.325zM23.15 11.46c.53-1.39 1.48-1.39 2.01 0l.48 1.25c.53 1.39-.06 2.34-1.5 2.34-.85 0-1.51-.39-1.51-1.16v-1.18c0-.77.66-1.16 1.51-1.16h.01z" />
    </svg>
);

const MicrosoftLogo = () => (
    <svg width="64" height="64" viewBox="0 0 21 21" fill="currentColor" className="text-white transition-colors duration-300">
      <path fill="#f25022" d="M1 1h9v9H1z" />
      <path fill="#7fba00" d="M11 1h9v9h-9z" />
      <path fill="#00a4ef" d="M1 11h9v9H1z" />
      <path fill="#ffb900" d="M11 11h9v9h-9z" />
    </svg>
);

const XeroLogo = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="32" fill="#1483c6"/>
        <path d="M42.2797 45.4545L32.1477 33.1193L22.0156 45.4545H17.6136L30.2955 30.5625L17.7955 16H22.1974L32.1477 28.0852L42.098 16H46.5L33.9997 30.5625L46.6818 45.4545H42.2797Z" fill="white"/>
    </svg>
);

const partnerLogos: { [key: string]: React.ReactNode } = {
  aws: <AwsLogo />,
  microsoft: <MicrosoftLogo />,
  xero: <XeroLogo />,
};

const PartnerCard = ({ partner }: { partner: any }) => {
  return (
    <div className="group [perspective:1000px]">
      <div className="relative h-full rounded-xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(5deg)_rotateX(5deg)]">
        <div className="absolute inset-0 glass-morphic rounded-xl p-8 border border-primary/20 flex flex-col items-center text-center card-glow">
          <div className="mb-6">{partnerLogos[partner.logo]}</div>
          <h3 className="text-2xl font-bold text-foreground mb-4">{partner.name}</h3>
          <p className="text-muted-foreground">{partner.description}</p>
          {partner.name === "Microsoft" && (
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-[url('/grid.svg')] bg-repeat animate-pan" />
          )}
           {partner.name === "Xero" && (
            <div className="absolute inset-0 flex items-center justify-center -z-10">
                <div className="w-48 h-48 border-2 border-primary/30 rounded-full opacity-0 group-hover:opacity-50 group-hover:animate-spin-slow transition-opacity duration-500"/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

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

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.partners.map((partner, index) => (
            <PartnerCard key={index} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
