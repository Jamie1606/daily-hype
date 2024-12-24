"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LoadingIcon from "@/icons/svg/loading";
import { useActionState } from "react";

export default function SignUpForm() {
  // const [state, action, isPending] = useActionState()

  return (
    <form className="flex flex-col">
      <label className="text-center text-2xl font-semibold">Create Your Account</label>
      <label className="mt-4 text-[15px]">Name*</label>
      <Input name="email" className="w-[500px] mt-1" variant="input" type="text" placeholder="Name" />
      <label className="mt-4 text-[15px]">Email*</label>
      <Input name="email" className="w-[500px] mt-1" variant="input" type="email" placeholder="user@gmail.com" />
      <label className="mt-4 text-[15px]">Password*</label>
      <Input name="password" className="w-[500px] mt-1" variant="input" type="password" placeholder="password" />
      <label className="mt-4 text-[15px]">Confirm Password*</label>
      <Input name="confirm-password" className="w-[500px] mt-1" variant="input" type="password" placeholder="confirm password" />
      <Button className="mt-6 w-[8rem] h-[2.6rem] mx-auto" variant="primary">
        Sign In
        {/* {isPending ? <LoadingIcon width={24} height={24} className="fill-white" /> : <span>Sign In</span>} */}
      </Button>
    </form>
  );
}
