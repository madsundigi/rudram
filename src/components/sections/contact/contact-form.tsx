
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Mail, Phone, Linkedin, Twitter, Github } from "lucide-react";
import contactContent from "@/app/content/contact.json";
import settings from "@/app/content/settings.json";
import { HealthCheckModal } from "@/components/modals/health-check-modal";

export default function ContactForm() {
  return (
    <section id="contact-form" className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 space-y-6 glass-morphic p-8 rounded-xl border border-primary/20 card-glow">
                <h3 className="text-2xl font-bold text-center text-primary">Send us a message</h3>
                <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input placeholder={contactContent.form.namePlaceholder} className="bg-background/50 border-primary/20 focus:bg-background focus:ring-primary"/>
                        <Input type="email" placeholder={contactContent.form.emailPlaceholder} className="bg-background/50 border-primary/20 focus:bg-background focus:ring-primary"/>
                    </div>
                    <Input placeholder={contactContent.form.businessPlaceholder} className="bg-background/50 border-primary/20 focus:bg-background focus:ring-primary"/>
                    <Textarea placeholder={contactContent.form.messagePlaceholder} className="min-h-32 bg-background/50 border-primary/20 focus:bg-background focus:ring-primary"/>
                    <Button type="submit" size="lg" className="w-full btn-glow">
                        {contactContent.form.submitText}
                    </Button>
                </form>
            </div>
            <div className="lg:col-span-2 space-y-8">
                <div className="w-full rounded-xl glass-morphic border border-primary/20 p-6 flex flex-col items-center justify-center text-center card-glow">
                    <Calendar className="h-12 w-12 text-primary mb-4 text-glow"/>
                    <h3 className="text-xl font-bold mb-2">{contactContent.calendly.headline}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{contactContent.calendly.subheadline}</p>
                    <HealthCheckModal>
                      <Button className="btn-glow">
                        {contactContent.calendly.ctaText}
                      </Button>
                    </HealthCheckModal>
                </div>
                <div className="w-full rounded-xl glass-morphic border border-primary/20 p-6 space-y-4 card-glow">
                    <h3 className="text-xl font-bold text-center text-primary">Direct Contact</h3>
                    <div className="flex items-center gap-4 group">
                        <Mail className="h-6 w-6 text-accent group-hover:text-primary transition-colors"/>
                        <a href={`mailto:${contactContent.directContact.email}`} className="text-muted-foreground group-hover:text-foreground transition-colors">{contactContent.directContact.email}</a>
                    </div>
                    <div className="flex items-center gap-4 group">
                        <Phone className="h-6 w-6 text-accent group-hover:text-primary transition-colors"/>
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">{settings.contact.phone}</span>
                    </div>
                     <div className="flex justify-center pt-4 gap-6">
                        <Link href={settings.socials.linkedin} aria-label="LinkedIn">
                          <Linkedin className="h-7 w-7 text-muted-foreground transition-transform hover:text-primary hover:scale-110" />
                        </Link>
                        <Link href={settings.socials.twitter} aria-label="Twitter">
                          <Twitter className="h-7 w-7 text-muted-foreground transition-transform hover:text-primary hover:scale-110" />
                        </Link>
                        <Link href={settings.socials.github} aria-label="GitHub">
                          <Github className="h-7 w-7 text-muted-foreground transition-transform hover:text-primary hover:scale-110" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
