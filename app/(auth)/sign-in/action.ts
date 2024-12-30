"use server";

import bcrypt from "bcrypt";
import { SignInActionResponse, SignInFormDataSchema } from "./type";
import jwt from "jsonwebtoken";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

export async function performSignIn(_: SignInActionResponse | null, formData: FormData): Promise<SignInActionResponse> {
  const data = {
    email: formData.get("email")?.toString().trim() || "",
    password: formData.get("password")?.toString().trim() || "",
  };

  const result = SignInFormDataSchema.safeParse(data);

  if (!result.success) {
    return { success: false, message: "", error: "Invalid credentials", defaultData: data };
  }

  try {
    const user = await prisma.endUser.findUnique({ where: { email: data.email, status: "ACTIVE" } });

    if (!user) {
      return { success: false, message: "", error: "Invalid credentials", defaultData: data };
    }

    const isPasswordValid = await bcrypt.compare(data.password, user.password);
    if (!isPasswordValid) return { success: false, message: "", error: "Invalid credentials", defaultData: data };

    const token = jwt.sign({ userID: user.user_id, email: user.email, role: user.role }, process.env.JWT_SECRET as string, { expiresIn: process.env.JWT_EXPIRATION || "1h" });
    const cookieStore = await cookies();

    cookieStore.set({ name: "auth-token", value: token, httpOnly: true, maxAge: 3600, secure: false, sameSite: "lax", path: "/" });

    return { success: true, message: "Sign in Success", defaultData: undefined };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return { success: false, message: "", error: "Internal server error", defaultData: data };
    }

    return { success: false, message: "", error: "Internal server error", defaultData: data };
  }
}
