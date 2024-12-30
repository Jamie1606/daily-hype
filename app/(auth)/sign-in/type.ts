import { z } from "zod";

// Define the schema for SignInFormData
export const SignInFormDataSchema = z.object({
  email: z.string().trim().email("Invalid credentials"),
  password: z.string().trim().min(8, "Invalid credentials"),
});

// Infer the typescript type from the SignInFormData schema
export type SignInFormData = z.infer<typeof SignInFormDataSchema>;

export type SignInActionResponse = {
  success: boolean;
  message: string;
  error?: string;
  defaultData?: {
    email: string | null;
    password: string | null;
  };
};
