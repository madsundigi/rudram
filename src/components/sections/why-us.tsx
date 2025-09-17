import { MessageCircle, Settings, TrendingUp, InfinityIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <MessageCircle className="h-10 w-10 text-primary" />,
    title: "Simple First",
    description: "We speak your language and deliver quick wins, not jargon-filled reports.",
  },
  {
    icon: <Settings className="h-10 w-10 text-primary" />,
    title: "Built for You",
    description: "Custom solutions that fit your business, using the tools you already own.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: "Results-Oriented",
    description: "Our focus is on actionable insights that directly impact your bottom line.",
  },
  {
    icon: <InfinityIcon className="h-10 w-10 text-primary" />,
    title: "Future-Proof",
    description: "We build scalable systems that grow with you, ensuring long-term value.",
  },
];

const FlipCard = ({ feature }: { feature: typeof features[0] }) => {
  return (
    <div className="group h-64 w-full [perspective:1000px]">
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 glass-morphic rounded-xl flex flex-col items-center justify-center p-6 text-center border border-primary/20">
          <div className="mb-4">{feature.icon}</div>
          <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
        </div>
        {/* Back */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-primary/90 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
          <p className="text-lg text-primary-foreground">{feature.description}</p>
        </div>
      </div>
    </div>
  );
};


export default function WhyUs() {
  return (
    <section id="why-us" className="w-full py-20 lg:py-32 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground/90 to-foreground/60">
            Why Choose Rudram
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">
            We're more than just data analysts. We're your partners in clarity.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FlipCard key={index} feature={feature} />
          ))}
        </div>
        <div className="mt-20 text-center">
          <Button size="lg" className="relative btn-glow px-8 py-6 text-lg">
            <span className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary to-accent opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 animate-pulse-glow" />
            <span className="relative">Get Your Free Intro Call</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
