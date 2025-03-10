"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LoadingIcon from "@/icons/svg/loading";
import { useActionState, useEffect, useRef } from "react";
import { performSignUp } from "./action";
import { cn } from "@/lib/utils";
import url from "@/constant/url";
import Link from "next/link";
import Alert from "@/components/shared/alert";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const [state, action, isPending] = useActionState(performSignUp, null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (state && state?.success) {
      setTimeout(() => {
        router.push(url.SIGNIN);
      }, 1500);
    }
  }, [state]);

  return (
    <>
      {state !== null && <Alert message={state.message} success={state.success} className="mt-8 w-full lg:mb-8 lg:w-[500px]" />}

      {/* Sign up form */}
      <form action={action} className="flex flex-col w-full mt-12 px-4 lg:mt-0 lg:w-fit lg:px-0">
        <label className="text-center text-2xl font-semibold">Create Your Account</label>

        <label className="mt-4 text-[15px]">Name</label>
        <Input autoFocus name="name" value={state?.defaultData?.name || ""} className={cn("w-full lg:w-[500px] mt-1", state?.errors?.name && "border-red-600")} variant="input" type="text" placeholder="Name" required disabled={isPending} clear={state?.success} />
        {state?.errors?.name &&
          state.errors.name.length > 0 &&
          state.errors.name.map((error, index) => (
            <label key={index} className="ms-1 text-sm text-red-600 mt-0.5">
              {error}
            </label>
          ))}

        <label className="mt-4 text-[15px]">Email</label>
        <Input ref={emailInputRef} name="email" value={state?.defaultData?.email || ""} className={cn("w-full lg:w-[500px] mt-1", state?.errors?.email && "border-red-600")} variant="input" type="email" placeholder="user@gmail.com" required disabled={isPending} clear={state?.success} />
        {state?.errors?.email &&
          state.errors.email.length > 0 &&
          state.errors.email.map((error, index) => (
            <label key={index} className="ms-1 text-sm text-red-600 mt-0.5">
              {error}
            </label>
          ))}

        <label className="mt-4 text-[15px]">Password</label>
        <Input name="password" value={state?.defaultData?.password || ""} className={cn("w-full lg:w-[500px] mt-1", state?.errors?.password && "border-red-600")} variant="input" type="password" placeholder="password" minLength={8} required disabled={isPending} clear={state?.success} />
        {state?.errors?.password &&
          state.errors.password.length > 0 &&
          state.errors.password.map((error, index) => (
            <label key={index} className="ms-1 text-sm text-red-600 mt-0.5">
              ➤&nbsp;{error}
            </label>
          ))}

        <label className="mt-4 text-[15px]">Confirm Password</label>
        <Input name="confirm-password" value={state?.defaultData?.confirmPassword || ""} className={cn("w-full lg:w-[500px] mt-1", state?.errors?.confirmPassword && "border-red-600")} variant="input" type="password" placeholder="confirm password" minLength={8} required disabled={isPending} clear={state?.success} />
        {state?.errors?.confirmPassword &&
          state.errors.confirmPassword.length > 0 &&
          state.errors.confirmPassword.map((error, index) => (
            <label key={index} className="ms-1 text-sm text-red-600 mt-0.5">
              {error}
            </label>
          ))}

        <Button type="submit" className="mt-6 w-[8rem] h-[2.6rem] mx-auto" variant="primary" disabled={isPending || state?.success}>
          {isPending ? <LoadingIcon width={24} height={24} className="fill-white" /> : <span>Sign Up</span>}
        </Button>
        <label className="mt-6 mb-8 lg:mb-0 text-[14px] text-center">
          Already have an account?&nbsp;
          <Link className="text-blue-600 hover:underline" href={url.SIGNIN}>
            Sign In
          </Link>
        </label>
      </form>
    </>
  );
}
