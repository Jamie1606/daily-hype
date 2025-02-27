import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function delay(second: number) {
  return new Promise((resolve) => setTimeout(resolve, second));
}

export function generateOPT() {
  return Math.floor(Math.random() * 900000 + 100000) + "";
}
