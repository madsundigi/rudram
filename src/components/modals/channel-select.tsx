"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, Calendar } from "lucide-react";
import type { ContactChannel } from "./health-check-modal";

const channels = [
    { id: "whatsapp", icon: MessageCircle, title: "WhatsApp Chat", description: "Immediate response" },
    { id: "call", icon: Phone, title: "Request a Call", description: "Within 2 business hours" },
    { id: "email", icon: Mail, title: "Request by Email", description: "Within 24 hours" },
] as const;

interface ChannelSelectProps {
    onChannelSelect: (channel: ContactChannel) => void;
    onBack: () => void;
}

export function ChannelSelect({ onChannelSelect, onBack }: ChannelSelectProps) {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
            </div>
            <div className="flex justify-start pt-4">
                 <Button variant="outline" onClick={onBack}>Back</Button>
            </div>
        </div>
    );
}
