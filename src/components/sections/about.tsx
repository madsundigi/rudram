import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function About() {
  const story = `At Rudram, we believe data should be simple. Founded by Shivam and Parav, our mission is to cut through the noise of spreadsheets and complex reports. We empower businesses to see their data clearly, make smarter decisions, and unlock the growth hidden within their numbers. We're not just consultants; we're your dedicated data partners.`;
  
  return (
    <section id="about" className="w-full py-20 lg:py-32 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative w-full max-w-sm mx-auto aspect-square [perspective:1500px]">
            <div className="relative w-full h-full [transform-style:preserve-3d] [transform:rotateY(-25deg)]">
                <div className="absolute inset-0 rounded-2xl glass-morphic border-2 border-primary/30 p-4 shadow-2xl shadow-primary/20 animate-float">
                  <Image
                    src="https://picsum.photos/seed/founders/400/400"
                    alt="Founders of Rudram Data Solutions"
                    width={400}
                    height={400}
                    className="rounded-lg object-cover w-full h-full"
                    data-ai-hint="founders portrait"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
                </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground/90 to-foreground/60">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {story}
            </p>
            <Button variant="outline" size="lg" className="glass-morphic border-primary/50 hover:bg-primary/20 hover:text-primary-foreground">
                Meet the Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
