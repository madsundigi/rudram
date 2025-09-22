
"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Github } from "lucide-react";
import settings from "@/app/content/settings.json";
import navLinks from "@/app/content/nav-links.json";
import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative bg-background/50 py-12 mt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(var(--primary)/0.3),rgba(255,255,255,0))]"></div>
        </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <Image src="/images/Logo.png" alt={`${settings.appName} logo`} width={24} height={24} />
            <span className="text-xl font-bold text-foreground">{settings.appName}</span>
          </div>
           <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {navLinks.map((link) => (
                <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
                prefetch={false}
                >
                {link.label}
                </Link>
            ))}
            <Link href="/privacy" className="text-muted-foreground transition-colors hover:text-foreground">Privacy Policy</Link>
          </nav>
          <div className="flex justify-center md:justify-end items-center gap-4">
            <Link href={settings.socials.twitter} aria-label="Twitter">
              <Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href={settings.socials.linkedin} aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href={settings.socials.github} aria-label="GitHub">
              <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
          </div>
        </div>
         <p className="text-center text-sm text-muted-foreground mt-8">
            © {currentYear || new Date().getFullYear()} {settings.companyName}. All rights reserved.
          </p>
      </div>
    </footer>
  );
}
