import { z } from "zod";

export const contactSchema = z.object({
  subject: z.string().max(64, "Max. 64 Characters").min(10, "Min. 10 Characters"),
  contact: z.string().max(64).min(1),
  content: z.string().max(1000, "Max. 1,000 Characters").min(50, "Min. 50 Characters"),
});

export type contactSchema = z.infer<typeof contactSchema>;
