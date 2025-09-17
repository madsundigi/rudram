
"use client";

import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ctaContent from '@/app/content/cta-texts.json';
import teamContacts from '@/app/content/team-contacts.json';
import { useState } from "react";
import { Calendar } from "lucide-react";

export function FreeIntroCallModal({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    
    const handleClose = () => {
        setOpen(false);
    }
    
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-md glass-morphic" onInteractOutside={handleClose}>
                <DialogHeader className="text-center items-center">
                    <div className="w-20 h-20 rounded-full glass-morphic flex items-center justify-center mb-4 border-2 border-primary/30">
                        <Calendar className="w-10 h-10 text-primary text-glow"/>
                    </div>
                    <DialogTitle className="text-2xl text-primary text-glow">{ctaContent.free_intro.title}</DialogTitle>
                    <DialogDescription>{ctaContent.free_intro.description}</DialogDescription>
                </DialogHeader>
                <div className="flex flex-col items-center justify-center gap-4 pt-4">
                    <Link href={teamContacts.introCallCalendarLink} target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button size="lg" className="w-full btn-glow">
                            Book 30-Min Call
                        </Button>
                    </Link>
                    <Button size="lg" variant="outline" onClick={handleClose} className="w-full">
                        Close
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
