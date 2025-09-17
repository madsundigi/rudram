import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-transparent" />
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground/90 to-foreground/60">
            Let's start with a quick chat
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">
            Tell us about your data challenges, and we'll tell you how we can help.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="w-full h-96 lg:h-full rounded-xl glass-morphic border border-primary/20 p-6 flex flex-col items-center justify-center text-center animate-pulse-glow">
                <Calendar className="h-16 w-16 text-primary mb-4"/>
                <h3 className="text-2xl font-bold mb-2">Book via Calendly</h3>
                <p className="text-muted-foreground mb-4">The fastest way to get on our calendar.</p>
                <p className="text-sm text-muted-foreground/50">(Calendly integration would appear here)</p>
            </div>
            <div className="space-y-6 glass-morphic p-8 rounded-xl border border-primary/20">
                <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input placeholder="Your Name" className="bg-background/50 border-primary/20 focus:bg-background"/>
                        <Input type="email" placeholder="Your Email" className="bg-background/50 border-primary/20 focus:bg-background"/>
                    </div>
                    <Input placeholder="Subject" className="bg-background/50 border-primary/20 focus:bg-background"/>
                    <Textarea placeholder="How can we help?" className="min-h-32 bg-background/50 border-primary/20 focus:bg-background"/>
                    <Button type="submit" size="lg" className="w-full btn-glow">
                        Send Message
                    </Button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
}
