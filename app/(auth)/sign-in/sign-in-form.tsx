"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useActionState, useEffect } from "react";
import { performSignIn } from "./action";
import LoadingIcon from "@/icons/svg/loading";
import Alert from "@/components/shared/alert";
import { useRouter } from "next/navigation";
import url from "@/constant/url";

export default function SignInForm() {
  const [state, action, isPending] = useActionState(performSignIn, null);
  const router = useRouter();

  useEffect(() => {
    if (state && state?.success && state.role) {
      setTimeout(() => {
        if (state.role === "ADMIN") router.push(url.DASHBOARD);
        else if (state.role === "USER") router.push(url.HOME);
        else router.push(url.HOME);
      }, 1500);
    }
  }, [state]);

  return (
    <>
      {state !== null && state.success && <Alert success={true} message={state.message} className="w-full -mt-8 mb-8 md:mt-8 lg:mb-8 lg:-mt-2 lg:w-[500px] 2xl:w-[600px] 2xl:-mt-4" />}
      {state !== null && !state.success && <Alert success={false} message={state.message} className="w-full -mt-8 mb-8 md:mt-8 lg:mb-8 lg:-mt-2 lg:w-[500px] 2xl:w-[600px] 2xl:-mt-4" />}

      <form action={action} className="flex w-full flex-col lg:w-fit">
        <label className="text-center text-2xl font-semibold 2xl:text-3xl">Welcome Back</label>
        <label className="mt-4 text-[15px] 2xl:text-[16px]">Email</label>
        <Input value={state?.defaultData?.email || ""} autoFocus disabled={isPending} name="email" className="w-full mt-1 lg:w-[500px] 2xl:w-[600px] 2xl:h-12 2xl:text-[15px]" variant="input" type="email" placeholder="user@gmail.com" required clear={state?.success} />
        <label className="mt-4 text-[15px] 2xl:text-[16px] 2xl:mt-6">Password</label>
        <Input value={state?.defaultData?.password || ""} name="password" disabled={isPending} className="w-full mt-1 lg:w-[500px] 2xl:w-[600px] 2xl:h-12 2xl:text-[15px]" variant="input" type="password" placeholder="password" required clear={state?.success} />
        <Button className="mt-6 w-[8rem] h-[2.6rem] mx-auto 2xl:h-[2.8rem]" variant="primary" disabled={isPending}>
          {isPending ? <LoadingIcon width={24} height={24} className="fill-white 2xl:w-7 2xl:h-7" /> : <span>Sign In</span>}
        </Button>
      </form>
    </>
  );
}
