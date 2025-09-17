import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] md:h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>
      <div className="container px-4 md:px-6 relative">
        <div className="space-y-6">
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-glow bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 animate-text-reveal"
            style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}
          >
            From Data Chaos to Data Clarity
          </h1>
          <p 
            className="max-w-3xl mx-auto text-muted-foreground md:text-xl lg:text-2xl animate-text-reveal animate-float"
            style={{ animationDelay: '0.5s', animationFillMode: 'backwards' }}
          >
            We help businesses turn scattered spreadsheets and reports into simple tools and smarter decisions.
          </p>
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-text-reveal"
            style={{ animationDelay: '0.8s', animationFillMode: 'backwards' }}
          >
            <Button size="lg" className="btn-glow text-lg px-8 py-6 bg-primary/90 hover:bg-primary">
              Book a Data Health Check
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 glass-morphic border-primary/50 hover:border-primary hover:bg-primary/10 hover:text-primary-foreground">
              See How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
