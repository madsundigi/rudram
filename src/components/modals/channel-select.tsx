"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, Calendar } from "lucide-react";
import type { ContactChannel, FormData } from "./health-check-modal";
import teamContacts from '@/app/content/team-contacts.json';
import Link from "next/link";

const channels = [
    { id: "email", icon: Mail, title: "Request by Email", description: "Within 24 hours" },
] as const;

interface ChannelSelectProps {
    formData: Partial<FormData>;
    onChannelSelect: (channel: ContactChannel) => void;
    onBack: () => void;
}

export function ChannelSelect({ formData, onChannelSelect, onBack }: ChannelSelectProps) {

    const whatsAppMessage = encodeURIComponent(
        `Hi Rudram — I’d like to book a Data Health Check for the '${formData.serviceId}' service.
        \nName: ${formData.name}
        \nCompany: ${formData.company}
        \nEmail: ${formData.email}`
    );
    const whatsappUrl = `https://wa.me/${teamContacts.whatsapp}?text=${whatsAppMessage}`;
    const telUrl = `tel:+61892884503`;

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Card className="glass-morphic card-glow border-primary/20 text-center cursor-pointer hover:border-primary h-full">
                        <CardHeader className="items-center pb-2">
                            <MessageCircle className="w-10 h-10 mb-2 text-primary" />
                            <CardTitle className="text-base font-bold">WhatsApp Chat</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>Immediate response</CardDescription>
                        </CardContent>
                    </Card>
                </a>

                <a href={telUrl}>
                    <Card className="glass-morphic card-glow border-primary/20 text-center cursor-pointer hover:border-primary h-full">
                        <CardHeader className="items-center pb-2">
                            <Phone className="w-10 h-10 mb-2 text-primary" />
                            <CardTitle className="text-base font-bold">Make a Call</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>Direct line to our team</CardDescription>
                        </CardContent>
                    </Card>
                </a>
                
                {channels.map(channel => (
                    <Card 
                        key={channel.id}
                        className="glass-morphic card-glow border-primary/20 text-center cursor-pointer hover:border-primary"
                        onClick={() => onChannelSelect(channel.id)}
                    >
                        <CardHeader className="items-center pb-2">
                            <channel.icon className="w-10 h-10 mb-2 text-primary" />
                            <CardTitle className="text-base font-bold">{channel.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>{channel.description}</CardDescription>
                        </CardContent>
                    </Card>
                ))}
                 <Link href={teamContacts.primaryCalendarLink} target="_blank" passHref>
                    <Card className="glass-morphic card-glow border-primary/20 text-center cursor-pointer hover:border-primary h-full">
                         <CardHeader className="items-center pb-2">
                            <Calendar className="w-10 h-10 mb-2 text-primary" />
                            <CardTitle className="text-base font-bold">Book on Calendar</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>Choose your own time</CardDescription>
                        </CardContent>
                    </Card>
                </Link>
            </div>
            <div className="flex justify-start pt-4">
                 <Button variant="outline" onClick={onBack}>Back</Button>
            </div>
        </div>
    );
}
