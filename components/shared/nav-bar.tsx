"use client";

import url from "@/constant/url";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ShoppingBagIcon from "@/icons/svg/shopping-bag";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import NavLink from "./nav-link";

const navLinks = [
  { label: "Home", url: url.HOME },
  { label: "Explore", url: url.HELP },
  { label: "Man", url: url.HELP },
  { label: "Woman", url: url.HELP },
  { label: "Boy", url: url.HELP },
  { label: "Girl", url: url.HELP },
];

export default function NavBar() {
  const pathName = usePathname();
  const router = useRouter();

  const navigateTo = (url: string) => {
    router.push(url);
  };

  return (
    <div className="flex py-5 px-20 items-center">
      <Link className="text-3xl tracking-wider font-bold cursor-pointer" href={url.HOME}>
        DAILYHYPE
      </Link>
      <div className="flex ms-16 gap-x-8 text-[15px] text-slate-600 items-center">
        {navLinks.map((item, index) => (
          <NavLink key={index} active={pathName === item.url} url={item.url} label={item.label} />
        ))}
      </div>
      <div className="flex ms-auto items-center">
        <ShoppingBagIcon width={26} height={26} />
        <Button className="ms-6" variant="ghost" onClick={() => navigateTo(url.SIGNIN)}>
          Sign In
        </Button>
        <Button className="ms-4" variant="primary" onClick={() => navigateTo(url.SIGNUP)}>
          Sign Up
        </Button>
      </div>
    </div>
  );
}
