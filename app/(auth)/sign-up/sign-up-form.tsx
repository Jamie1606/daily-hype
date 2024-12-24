"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LoadingIcon from "@/icons/svg/loading";
import { useActionState } from "react";
import { performSignUp } from "./action";
import { cn } from "@/lib/utils";

export default function SignUpForm() {
  const [state, action, isPending] = useActionState(performSignUp, null);

  return (
    <form action={action} className="flex flex-col">
      <label className="text-center text-2xl font-semibold">Create Your Account</label>

      <label className="mt-4 text-[15px]">Name*</label>
      <Input name="name" value={state?.defaultData?.name || ""} className={cn("w-[500px] mt-1", state?.errors?.name && "border-red-600")} variant="input" type="text" placeholder="Name" required />
      {state?.errors?.name &&
        state.errors.name.length > 0 &&
        state.errors.name.map((error, index) => (
          <label key={index} className="ms-1 text-sm text-red-600 mt-0.5">
            {error}
          </label>
        ))}

      <label className="mt-4 text-[15px]">Email*</label>
      <Input name="email" value={state?.defaultData?.email || ""} className={cn("w-[500px] mt-1", state?.errors?.email && "border-red-600")} variant="input" type="email" placeholder="user@gmail.com" required />
      {state?.errors?.email &&
        state.errors.email.length > 0 &&
        state.errors.email.map((error, index) => (
          <label key={index} className="ms-1 text-sm text-red-600 mt-0.5">
            {error}
          </label>
        ))}

      <label className="mt-4 text-[15px]">Password*</label>
      <Input name="password" value={state?.defaultData?.password || ""} className={cn("w-[500px] mt-1", state?.errors?.password && "border-red-600")} variant="input" type="password" placeholder="password" minLength={8} required />
      {state?.errors?.password &&
        state.errors.password.length > 0 &&
        state.errors.password.map((error, index) => (
          <label key={index} className="ms-1 text-sm text-red-600 mt-0.5">
            ➤&nbsp;{error}
          </label>
        ))}

      <label className="mt-4 text-[15px]">Confirm Password*</label>
      <Input name="confirm-password" value={state?.defaultData?.confirmPassword || ""} className={cn("w-[500px] mt-1", state?.errors?.confirmPassword && "border-red-600")} variant="input" type="password" placeholder="confirm password" minLength={8} required />
      {state?.errors?.confirmPassword &&
        state.errors.confirmPassword.length > 0 &&
        state.errors.confirmPassword.map((error, index) => (
          <label key={index} className="ms-1 text-sm text-red-600 mt-0.5">
            {error}
          </label>
        ))}

      <Button className="mt-6 w-[8rem] h-[2.6rem] mx-auto" variant="primary">
        {isPending ? <LoadingIcon width={24} height={24} className="fill-white" /> : <span>Sign Up</span>}
      </Button>
    </form>
  );
}
