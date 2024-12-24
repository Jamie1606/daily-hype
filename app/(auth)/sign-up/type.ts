import { z } from "zod";

export const SignUpFormDataSchema = z
  .object({
    name: z.string().trim().nonempty("Name is required."),
    email: z.string().trim().email("Invalid email format."),
    password: z
      .string()
      .trim()
      .min(8, "Password must be at least 8 characters long.")
      .regex(/[A-Z]/, "Password must containt at least one uppercase letter.")
      .regex(/[0-9]/, "Password must contain at least one number.")
      .regex(/[^a-zA-Z0-9]/, "Password must contain at least one special character."),
    confirmPassword: z.string().trim().min(8, "Confirm password must match password."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Confirm password must match password.",
    path: ["confirmPassword"],
  });

export type SignUpFormData = z.infer<typeof SignUpFormDataSchema>;

export type SignUpActionResponse = {
  success: boolean;
  message: string;
  errors?: z.inferFlattenedErrors<typeof SignUpFormDataSchema>["fieldErrors"];
  defaultData?: {
    name: string | null;
    email: string | null;
    password: string | null;
    confirmPassword: string | null;
  };
};
