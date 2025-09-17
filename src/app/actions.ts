"use server";

import { z } from 'zod';

const FormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  phone: z.string().optional(),
  businessSize: z.enum(["1-10", "11-50", "51-250", "250+"]),
  message: z.string().optional(),
  serviceId: z.string(),
  contactChannel: z.enum(["whatsapp", "call", "email", "calendly"]),
  consent: z.boolean().refine(val => val === true, { message: "You must consent to be contacted." }),
});

export type HealthCheckFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    company?: string[];
    businessSize?: string[];
    consent?: string[];
    serviceId?: string[];
    contactChannel?: string[];
  };
  success: boolean;
};

export async function submitHealthCheck(prevState: HealthCheckFormState, formData: FormData) {
  const validatedFields = FormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    company: formData.get('company'),
    phone: formData.get('phone'),
    businessSize: formData.get('businessSize'),
    message: formData.get('message'),
    serviceId: formData.get('serviceId'),
    contactChannel: formData.get('contactChannel'),
    consent: formData.get('consent') === 'on',
  });
  
  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  const payload = {
    ...validatedFields.data,
    request_id: `req_${Date.now()}`,
    consent_timestamp: new Date().toISOString(),
  };

  // In a real application, you would send this payload to your CRM or backend via a webhook.
  // For now, we will just log it to the server console.
  console.log("New Data Health Check Request:", JSON.stringify(payload, null, 2));
  
  // Simulate webhook call
  try {
    // const response = await fetch('YOUR_WEBHOOK_URL', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(payload),
    // });
    // if (!response.ok) {
    //   throw new Error('Webhook failed');
    // }
  } catch (error) {
    console.error("Failed to send to webhook:", error);
    // Fallback: Save to an internal system or log for manual processing.
    return {
      message: "There was an issue processing your request, but we have saved it. Our team will get in touch shortly.",
      success: false, 
    };
  }
  
  return { 
    message: "Your request has been submitted successfully!",
    success: true,
  };
}
