"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { performSignIn } from "./action";
import LoadingIcon from "@/icons/svg/loading";

export default function SignInForm() {
  const [state, action, isPending] = useActionState(performSignIn, null);

  return (
    <form action={action} className="flex flex-col">
      <label className="text-center text-2xl font-semibold">Welcome Back</label>
      <label className="mt-4 text-[15px]">Email*</label>
      <Input name="email" className="w-[500px] mt-1" variant="input" type="email" placeholder="user@gmail.com" />
      <label className="mt-4 text-[15px]">Password*</label>
      <Input name="password" className="w-[500px] mt-1" variant="input" type="password" placeholder="password" />
      <Button className="mt-6 w-[8rem] h-[2.6rem] mx-auto" variant="primary">
        {isPending ? <LoadingIcon width={24} height={24} className="fill-white" /> : <span>Sign In</span>}
      </Button>
    </form>
  );
}
