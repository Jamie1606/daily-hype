"use server";

import { SignUpActionResponse, SignUpFormDataSchema } from "./type";

export async function performSignUp(_: SignUpActionResponse | null, formData: FormData): Promise<SignUpActionResponse> {
  const data = {
    name: formData.get("name")?.toString().trim() || "",
    email: formData.get("email")?.toString().trim() || "",
    password: formData.get("password")?.toString().trim() || "",
    confirmPassword: formData.get("confirm-password")?.toString().trim() || "",
  };

  const result = SignUpFormDataSchema.safeParse(data);

  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
    return { success: false, message: "", errors: result.error.flatten().fieldErrors, defaultData: data };
  }

  return { success: true, message: "new user successfully created" };
}
