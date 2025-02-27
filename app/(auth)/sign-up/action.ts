"use server";

import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";
import { SignUpActionResponse, SignUpFormDataSchema } from "./type";
import { Prisma } from "@prisma/client";
import { generateOPT } from "@/lib/utils";

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

  const hashedPassword = await bcrypt.hash(data.password, 10);
  const codeExpireTime = new Date();
  codeExpireTime.setMinutes(codeExpireTime.getMinutes() + 5);

  try {
    await prisma.endUser.create({ data: { name: data.name, email: data.email, password: hashedPassword, code: generateOPT(), code_expired_at: codeExpireTime } });
    return { success: true, message: "Your account is successfully created.", defaultData: undefined };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(error.code);
      if (error.code === "P2002") {
        return { success: false, message: "Email already exists.", defaultData: data };
      }
    }

    return { success: false, message: "An unexpected error occurred.", defaultData: data };
  }
}

export async function verifyEmail(email: string, code: string) {
  try {
    const user = await prisma.endUser.findFirstOrThrow({ where: { email: email } });
    if (user.code === code && user.code_expired_at) {
      const date = new Date(user.code_expired_at);
      if (date > new Date()) {
        await prisma.endUser.update({
          where: {
            user_id: user.user_id
          },
          data: {
            status: "ACTIVE",
            code: null,
            code_expired_at: null,
          },
        });
        return { success: true, message: "Email verified." };
      } else {
        return { success: false, message: "OTP code expired." };
      }
    }

    return { success: false, message: "Invalid OTP code." };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(error.code);
      if (error.code === "P2025") {
        return { success: false, message: "User not found." };
      }
    }

    return { success: false, message: "An unexpected error occurred." };
  }
}
