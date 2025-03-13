import { URLType } from "@/constant/url";
import { IconProps } from "@/icons/svg/definition";
import clsx from "clsx";
import Link from "next/link";

interface SidebarItemProps {
  url: URLType;
  label: string;
  icon: React.ElementType<IconProps>;
  isActive: boolean;
}

export default function SidebarItem({ url, label, icon: Icon, isActive }: SidebarItemProps) {
  return (
    <Link href={url} className={clsx("ps-4 flex w-full select-none hover:bg-brand-20 transition-all duration-300 py-2 cursor-pointer rounded-lg items-center", isActive && "text-brand font-bold bg-brand-10 hover:bg-brand-10")}>
      <Icon width={20} height={20} className="mr-[6px]" color={isActive ? "rgb(102, 126, 234)" : "#000"} fill={isActive ? "rgb(102, 126, 234)" : "#000"} />
      <span>{label}</span>
    </Link>
  );
}
