"use client";

import { useState, useMemo } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import ctaContent from '@/app/content/cta-texts.json';
import { StartJourneyForm, type StartJourneyFormValues } from './start-journey-form';
import { ChannelSelect } from './channel-select';
import { Confirmation } from './confirmation';

export type ContactChannel = "whatsapp" | "call" | "email" | "calendly";


export function StartJourneyModal({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<Partial<StartJourneyFormValues>>({});
    
    const title = ctaContent.start_journey.title;
    const description = ctaContent.start_journey.description;
    
    const handleClose = () => {
        setOpen(false);
        setTimeout(() => {
            setStep(1);
            setFormData({});
        }, 300);
    }

    const handleFormSubmit = (data: StartJourneyFormValues) => {
        // In a real app, you would handle the submission here (e.g., send to a backend).
        // For now, we'll just log it and show a success message.
        console.log("Start Journey Data:", data);
        setFormData(data); // Save data
        setStep(2); // Move to a confirmation/thank you step
    };
    
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-[425px] md:sm:max-w-lg glass-morphic" onInteractOutside={handleClose}>
                <DialogHeader>
                    <DialogTitle className="text-2xl text-primary text-glow">{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                
                {step === 1 && (
                    <StartJourneyForm
                        onFormSubmit={handleFormSubmit}
                        onCancel={handleClose}
                    />
                )}

                {step === 2 && (
                    <div className="space-y-6 text-center">
                        <h3 className="text-xl font-semibold text-primary-foreground">Thank You!</h3>
                        <p className="text-muted-foreground">
                            We've received your request. We'll send your personalized roadmap preview within 48 hours.
                        </p>
                        <p className="text-muted-foreground">
                            Want to pick a time to chat now?
                        </p>
                        <div className="flex justify-center gap-4 pt-4">
                            <a href={`https://calendly.com/rudramdata-info/intro`} target="_blank" rel="noopener noreferrer" className="btn-glow inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8">
                                Book Quick Call
                            </a>
                             <button onClick={handleClose} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8">
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
