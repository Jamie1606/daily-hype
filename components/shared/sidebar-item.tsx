import { URLType } from "@/constant/url";
import { IconProps } from "@/icons/svg/definition";
import Link from "next/link";

interface SidebarItemProps {
  url: URLType;
  label: string;
  icon: React.ElementType<IconProps>;
}

export default function SidebarItem({ url, label, icon: Icon }: SidebarItemProps) {
  return (
    <Link href={url} className="ps-4 flex w-full select-none hover:bg-brand-20 transition-all duration-300 py-2 cursor-pointer rounded-lg items-center">
      <Icon width={20} height={20} className="mr-[6px]" color="#000" fill="#000" />
      <span>{label}</span>
    </Link>
  );
}
