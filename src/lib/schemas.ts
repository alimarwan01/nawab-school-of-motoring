import { z } from "zod/v4";

/** Shared contact form validation — used by both client form and API route */
export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(6, "Please enter a valid phone number"),
  email: z.email("Please enter a valid email address"),
  message: z.string().min(10, "Please enter a message (at least 10 characters)"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
