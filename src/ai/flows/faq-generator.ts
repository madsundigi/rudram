'use server';

/**
 * @fileOverview FAQ Generator flow. Adapts existing FAQ content into dynamic Q&A panels with 3D accordion effects, animations, and micro-CTAs.
 *
 * - faqGenerator - A function that handles the FAQ generation process.
 * - FAQGeneratorInput - The input type for the faqGenerator function.
 * - FAQGeneratorOutput - The return type for the faqGenerator function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FAQGeneratorInputSchema = z.object({
  faqs: z
    .array(
      z.object({
        question: z.string().describe('The FAQ question.'),
        answer: z.string().describe('The answer to the FAQ question.'),
        icon: z.string().optional().describe('An identifier for an icon.')
      })
    )
    .describe('An array of FAQ questions and answers.'),
});
export type FAQGeneratorInput = z.infer<typeof FAQGeneratorInputSchema>;

const FAQGeneratorOutputSchema = z.object({
  adaptedFaqs: z
    .array(
      z.object({
        question: z.string().describe('The adapted FAQ question for 3D panel.'),
        answer: z.string().describe('The adapted FAQ answer with micro-CTA.'),
        microCta: z.string().optional().describe('The micro-CTA text.'),
      })
    )
    .describe('An array of adapted FAQ questions and answers with micro-CTAs.'),
});
export type FAQGeneratorOutput = z.infer<typeof FAQGeneratorOutputSchema>;

export async function faqGenerator(input: FAQGeneratorInput): Promise<FAQGeneratorOutput> {
  return faqGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'faqGeneratorPrompt',
  input: {schema: FAQGeneratorInputSchema},
  output: {schema: FAQGeneratorOutputSchema},
  prompt: `You are an expert content manager specializing in creating engaging FAQ sections for websites.

You will receive a list of FAQs, and you will adapt them into visually appealing, dynamic Q&A panels suitable for a website with a 3D accordion effect.  Each answer should include a relevant micro-CTA.

Here are the FAQs:

{{#each faqs}}
Question: {{{question}}}
Answer: {{{answer}}}
{{/each}}

Adapt each FAQ, and for each include a micro-CTA at the end of the answer. The micro-CTA should be very short and relevant to the question. The micro-CTA should be no longer than 60 characters including spaces.

Return the adapted FAQs with their micro-CTAs.

Output in JSON format.
`,
});

const faqGeneratorFlow = ai.defineFlow(
  {
    name: 'faqGeneratorFlow',
    inputSchema: FAQGeneratorInputSchema,
    outputSchema: FAQGeneratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
