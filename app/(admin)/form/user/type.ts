import { z } from "zod";

export const UserFormDataSchema = z
  .object({
    name: z.string().trim().nonempty("Name is required."),
    email: z.string().trim().email("Invalid email format."),
    password: z
      .string()
      .trim()
      .min(8, "Password must be at least 8 characters long.")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
      .regex(/[0-9]/, "Password must contain at least one number.")
      .regex(/[^a-zA-Z0-9]/, "Password must contain at least one special character."),
    gender: z.string().trim().nonempty("Gender is required"),
  })
  .refine((data) => data.gender.toLowerCase() === "male" || data.gender.toLowerCase() === "female", {
    message: "Gender must be male or female.",
    path: ["gender"],
  });

export type UserFormData = z.infer<typeof UserFormDataSchema>;

export type SaveUserResponse = {
  success: boolean;
  message: string;
  errors?: z.inferFlattenedErrors<typeof UserFormDataSchema>["fieldErrors"];
  defaultData?: {
    name: string | null;
    email: string | null;
    password: string | null;
  };
};
