"use server";

import { delay } from "@/lib/utils";
import { SaveUserResponse, UserFormDataSchema } from "./type";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";

export async function saveUser(_: SaveUserResponse | null, formData: FormData): Promise<SaveUserResponse> {
  const data = {
    name: formData.get("name")?.toString().trim() || "",
    email: formData.get("email")?.toString().trim() || "",
    password: formData.get("password")?.toString().trim() || "",
    gender: formData.get("gender")?.toString().trim() || "",
  };

  const result = UserFormDataSchema.safeParse(data);

  if (!result.success) {
    await delay(1000);
    console.log(result.error.flatten().fieldErrors);
    return { success: false, message: "", errors: result.error.flatten().fieldErrors, defaultData: data };
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  try {
    await prisma.endUser.create({ data: { name: data.name, email: data.email, password: hashedPassword } });
    return { success: true, message: "Your account is successfully created.", defaultData: undefined };
  } catch (error) {
    return { success: false, message: "An unexpected error occurred.", defaultData: data };
  }
}
