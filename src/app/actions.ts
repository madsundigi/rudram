"use server";

import { faqGenerator, type FAQGeneratorInput, type FAQGeneratorOutput } from '@/ai/flows/faq-generator';

export async function generateAdaptedFaqs(
  input: FAQGeneratorInput
): Promise<FAQGeneratorOutput> {
  // In a real app, you might add authentication, validation, or rate-limiting here.
  try {
    const output = await faqGenerator(input);
    return output;
  } catch (error) {
    console.error("Error generating FAQs with AI:", error);
    // Return a structured error or fallback content
    throw new Error("Failed to generate FAQ content. Please try again later.");
  }
}
