"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { performSignIn } from "./action";
import LoadingIcon from "@/icons/svg/loading";
import Alert from "@/components/shared/alert";

export default function SignInForm() {
  const [state, action, isPending] = useActionState(performSignIn, null);

  return (
    <>
      {state !== null && !state.success && <Alert success={false} message={state.message} className="mt-8 w-full lg:mb-8 lg:mt-0 lg:w-[500px]" />}
      
      <form action={action} className="flex w-full flex-col lg:w-fit">
        <label className="text-center text-2xl font-semibold">Welcome Back</label>
        <label className="mt-4 text-[15px]">Email*</label>
        <Input value={state?.defaultData?.email || ""} disabled={isPending} name="email" className="w-full lg:w-[500px] mt-1" variant="input" type="email" placeholder="user@gmail.com" required clear={state?.success} />
        <label className="mt-4 text-[15px]">Password*</label>
        <Input value={state?.defaultData?.password || ""} name="password" disabled={isPending} className="w-full lg:w-[500px] mt-1" variant="input" type="password" placeholder="password" required clear={state?.success} />
        <Button className="mt-6 w-[8rem] h-[2.6rem] mx-auto" variant="primary" disabled={isPending}>
          {isPending ? <LoadingIcon width={24} height={24} className="fill-white" /> : <span>Sign In</span>}
        </Button>
      </form>
    </>
  );
}
