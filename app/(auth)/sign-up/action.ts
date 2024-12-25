"use server";

import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";
import { SignUpActionResponse, SignUpFormDataSchema } from "./type";
import { Prisma } from "@prisma/client";

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

  const hashedPassword = bcrypt.hashSync(data.password, 10);

  try {
    await prisma.endUser.create({ data: { name: data.name, email: data.email, password: hashedPassword } });
    return { success: true, message: "Your account is successfully created.", defaultData: undefined };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return { success: false, message: "Email already exists.", defaultData: data };
      } else {
        console.log(error.code);
        return { success: false, message: "An unexpected error occurred", defaultData: data };
      }
    }

    return { success: false, message: "An unexpected error occurred.", defaultData: data };
  }
}
