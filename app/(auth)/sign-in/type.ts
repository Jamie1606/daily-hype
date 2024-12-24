import { z } from "zod";

// Define the schema for SignInFormData
export const SignInFormDataSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().trim().min(8),
});

// Infer the typescript type from the SignInFormData schema
export type SignInFormData = z.infer<typeof SignInFormDataSchema>;

export type SignInActionResponse = {
  success: boolean;
  message: string;
  defaultData?: SignInFormData;
};
