"use client";

import { useState, useMemo } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import ctaContent from '@/app/content/cta-texts.json';
import { HealthCheckForm } from './health-check-form';
import { ChannelSelect } from './channel-select';
import { Confirmation } from './confirmation';

export type Service = {
    id: string;
    title: string;
    description: string;
};

export type FormData = {
    name: string;
    email: string;
    company: string;
    phone?: string;
    businessSize: "1-10" | "11-50" | "51-250" | "250+";
    message?: string;
    serviceId: string;
    consent: boolean;
};

export type ContactChannel = "whatsapp" | "call" | "email" | "calendly";

export function HealthCheckModal({ children, defaultServiceId }: { children: React.ReactNode, defaultServiceId?: string }) {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<Partial<FormData>>({ serviceId: defaultServiceId });
    const [channel, setChannel] = useState<ContactChannel | null>(null);

    const title = useMemo(() => {
        if (step === 3) return "Confirm Your Request";
        if (step === 2) return "Choose Your Contact Method";
        const serviceCta = ctaContent[formData.serviceId as keyof typeof ctaContent] || ctaContent.book_health_check;
        return serviceCta.title;
    }, [step, formData.serviceId]);

    const description = useMemo(() => {
        if (step === 3) return "Please review your details before submitting.";
        if (step === 2) return "How would you like us to get in touch?";
        const serviceCta = ctaContent[formData.serviceId as keyof typeof ctaContent] || ctaContent.book_health_check;
        return serviceCta.description;
    }, [step, formData.serviceId]);
    
    const handleClose = () => {
        setOpen(false);
        setTimeout(() => {
            setStep(1);
            setFormData({ serviceId: defaultServiceId });
            setChannel(null);
        }, 300);
    }
    
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-[425px] md:sm:max-w-lg glass-morphic" onInteractOutside={handleClose}>
                <DialogHeader>
                    <DialogTitle className="text-2xl text-primary text-glow">{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                
                {step === 1 && (
                    <HealthCheckForm
                        defaultServiceId={defaultServiceId}
                        onFormSubmit={(data) => {
                            setFormData(data);
                            setStep(2);
                        }}
                    />
                )}

                {step === 2 && (
                    <ChannelSelect
                        formData={formData}
                        onChannelSelect={(selectedChannel) => {
                            setChannel(selectedChannel);
                            setStep(3);
                        }}
                        onBack={() => setStep(1)}
                    />
                )}
                
                {step === 3 && formData && channel && (
                    <Confirmation
                        formData={formData as FormData}
                        channel={channel}
                        onBack={() => setStep(2)}
                        onClose={handleClose}
                    />
                )}

            </DialogContent>
        </Dialog>
    );
}
