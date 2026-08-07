import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  company: z.string().optional(),
  message: z
    .string()
    .min(20, "Tell us a bit more about your project (20+ characters)"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
