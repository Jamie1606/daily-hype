"use client";

import ShoppingBagIcon from "@/icons/svg/shopping-bag";
import { Button } from "../ui/button";

export default function NavBarRight() {
  return (
    <div className="flex ms-auto items-center">
      <ShoppingBagIcon width={26} height={26} />
      <Button className="ms-6" variant="ghost">
        Sign In
      </Button>
      <Button className="ms-4" variant="primary">
        Sign Up
      </Button>
    </div>
  );
}
