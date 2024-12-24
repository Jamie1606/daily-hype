"use client";

import ShoppingBagIcon from "@/icons/svg/shopping-bag";
import { Button } from "../ui/button";
import url from "@/constant/url";
import { redirect, useRouter } from "next/navigation";

export default function NavBarRight() {
  const router = useRouter();

  const navigateTo = (url: string) => {
    router.push(url);
  };

  return (
    <div className="flex ms-auto items-center">
      <ShoppingBagIcon width={26} height={26} />
      <Button className="ms-6" variant="ghost" onClick={() => navigateTo(url.SIGNIN)}>
        Sign In
      </Button>
      <Button className="ms-4" variant="primary" onClick={() => navigateTo(url.SIGNUP)}>
        Sign Up
      </Button>
    </div>
  );
}
