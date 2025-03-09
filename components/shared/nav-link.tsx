import { URLType } from "@/constant/url";
import clsx from "clsx";
import Link from "next/link";

interface NavLinkProps {
  url: URLType;
  active: boolean;
  label: string;
}

export default function NavLink({ url, active, label }: NavLinkProps) {
  return (
    <Link href={url} className={clsx("hover:text-black hover:underline hover:underline-offset-4 transition-all duration-200 ease-in-out", active && "text-black hover:no-underline font-semibold")}>
      {label}
    </Link>
  );
}
