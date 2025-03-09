"use server";

import bcrypt from "bcrypt";
import { SignInActionResponse, SignInFormDataSchema } from "./type";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { delay } from "@/lib/utils";

export async function performSignIn(_: SignInActionResponse | null, formData: FormData): Promise<SignInActionResponse> {
  const data = {
    email: formData.get("email")?.toString().trim() || "",
    password: formData.get("password")?.toString().trim() || "",
  };

  const result = SignInFormDataSchema.safeParse(data);

  if (!result.success) {
    await delay(1000);
    return { success: false, message: "Invalid credentials", defaultData: data };
  }

  try {
    const user = await prisma.endUser.findUnique({ where: { email: data.email, NOT: { OR: [{ status: "BANNED" }, { status: "DELETED" }] } } });

    if (!user || !user.user_id || !user.email || !user.password) {
      await delay(1000);
      return { success: false, message: "Invalid credentials", defaultData: data };
    }

    const isPasswordValid = await bcrypt.compare(data.password, user.password);
    if (!isPasswordValid) {
      await delay(1000);
      return { success: false, message: "Invalid credentials", defaultData: data };
    }

    const token = jwt.sign({ userID: user.user_id, email: user.email, role: user.role }, process.env.JWT_SECRET as string, { expiresIn: process.env.JWT_EXPIRATION || "1h" });
    const cookieStore = await cookies();
    cookieStore.set({ name: "auth-token", value: token, httpOnly: true, maxAge: 3600, secure: false, sameSite: "lax", path: "/" });

    return { success: true, role: user.role, message: "Sign in Success", defaultData: undefined };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Internal server error", defaultData: data };
  }
}
