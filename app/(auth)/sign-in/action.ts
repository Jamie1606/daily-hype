"use server";

import { SignInActionResponse, SignInFormDataSchema } from "./type";

export async function performSignIn(_: SignInActionResponse | null, formData: FormData): Promise<SignInActionResponse> {
  const plainData = Object.fromEntries(formData.entries());
  console.log(plainData);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const parseResult = SignInFormDataSchema.safeParse(plainData);

  if (!parseResult.success) {
    console.error(parseResult.error.errors);
  } else {
    console.log(parseResult.data);
  }
  return { success: true, message: "" };
}
