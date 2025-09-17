"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { submitHealthCheck, type HealthCheckFormState } from '@/app/actions';
import type { FormData, ContactChannel } from "./health-check-modal";
import services from '@/app/content/services.json';
import { Button } from "@/components/ui/button";
import { useEffect } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface ConfirmationProps {
    formData: FormData;
    channel: ContactChannel;
    onBack: () => void;
    onClose: () => void;
}

const initialState: HealthCheckFormState = {
    message: '',
    errors: {},
    success: false,
};

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" className="btn-glow" disabled={pending}>
            {pending ? 'Submitting...' : 'Confirm & Send Request'}
        </Button>
    );
}

export function Confirmation({ formData, channel, onBack, onClose }: ConfirmationProps) {
    const [state, formAction] = useFormState(submitHealthCheck, initialState);
    
    useEffect(() => {
        if (state.success) {
            // Optional: trigger analytics event
        }
    }, [state.success, onClose]);
    
    if (state.success) {
        return (
             <AlertDialog open={true} onOpenChange={onClose}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-primary text-glow">Request Sent!</AlertDialogTitle>
                        <AlertDialogDescription>
                            {state.message} Our team will be in touch shortly via your chosen method.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={onClose} className="btn-glow">Close</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        )
    }

    return (
        <form action={formAction} className="space-y-6">
            {Object.entries(formData).map(([key, value]) => (
                <input type="hidden" key={key} name={key} value={String(value)} />
            ))}
             <input type="hidden" name="contactChannel" value={channel} />

            <div className="space-y-2 text-sm p-4 rounded-md glass-morphic border border-primary/20">
                <p><strong>Service:</strong> {services.services.find(s => s.id === formData.serviceId)?.title}</p>
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Company:</strong> {formData.company}</p>
                <p><strong>Contact Method:</strong> <span className="capitalize">{channel}</span></p>
            </div>
            
            {state.message && !state.success && (
                 <Alert variant="destructive">
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Submission Error</AlertTitle>
                    <AlertDescription>
                        {state.message}
                        {state.errors && <ul>{Object.values(state.errors).flat().map((err, i) => <li key={i}>- {err}</li>)}</ul>}
                    </AlertDescription>
                </Alert>
            )}

            <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={onBack} type="button">Back</Button>
                <SubmitButton />
            </div>
        </form>
    );
}
