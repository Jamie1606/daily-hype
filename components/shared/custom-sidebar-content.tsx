"use client";

import url from "@/constant/url";
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem } from "../ui/sidebar";
import SidebarItem from "./sidebar-item";
import CategoryIcon from "@/icons/svg/category";
import ClothIcon from "@/icons/svg/cloth";
import ColorIcon from "@/icons/svg/color";
import HomeIcon from "@/icons/svg/home";
import SizeIcon from "@/icons/svg/size";
import UserIcon from "@/icons/svg/user";
import { usePathname } from "next/navigation";

export default function CustomSidebarContent() {
  const pathName = usePathname();

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem className="px-3">
          <SidebarItem url={url.DASHBOARD} label="Dashboard" icon={HomeIcon} isActive={pathName === url.DASHBOARD} />
        </SidebarMenuItem>
      </SidebarMenu>
      <SidebarGroup>
        <SidebarGroupLabel className="text-[15px] mb-1">
          <span>FORMS</span>
        </SidebarGroupLabel>
        <SidebarMenu className="gap-y-1">
          <SidebarMenuItem className="px-3">
            <SidebarItem url={url.COLORFORM} label="Colour" icon={ColorIcon} isActive={pathName === url.COLORFORM} />
          </SidebarMenuItem>
          <SidebarMenuItem className="px-3">
            <SidebarItem url={url.DASHBOARD} label="Category" icon={CategoryIcon} isActive={pathName === url.DASHBOARD} />
          </SidebarMenuItem>
          <SidebarMenuItem className="px-3">
            <SidebarItem url={url.PRODUCTFORM} label="Product" icon={ClothIcon} isActive={pathName === url.PRODUCTFORM} />
          </SidebarMenuItem>
          <SidebarMenuItem className="px-3">
            <SidebarItem url={url.USERFORM} label="User" icon={UserIcon} isActive={pathName === url.USERFORM} />
          </SidebarMenuItem>
          <SidebarMenuItem className="px-3">
            <SidebarItem url={url.DASHBOARD} label="Size" icon={SizeIcon} isActive={pathName === url.DASHBOARD} />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel className="text-[15px] mb-1">
          <span>LISTS</span>
        </SidebarGroupLabel>
        <SidebarMenu className="gap-y-1">
          <SidebarMenuItem className="px-3">
            <SidebarItem url={url.DASHBOARD} label="Colour" icon={ColorIcon} isActive={pathName === url.DASHBOARD} />
          </SidebarMenuItem>
          <SidebarMenuItem className="px-3">
            <SidebarItem url={url.DASHBOARD} label="Category" icon={HomeIcon} isActive={pathName === url.DASHBOARD} />
          </SidebarMenuItem>
          <SidebarMenuItem className="px-3">
            <SidebarItem url={url.DASHBOARD} label="Product" icon={HomeIcon} isActive={pathName === url.DASHBOARD} />
          </SidebarMenuItem>
          <SidebarMenuItem className="px-3">
            <SidebarItem url={url.DASHBOARD} label="User" icon={HomeIcon} isActive={pathName === url.DASHBOARD} />
          </SidebarMenuItem>
          <SidebarMenuItem className="px-3">
            <SidebarItem url={url.DASHBOARD} label="Product" icon={HomeIcon} isActive={pathName === url.DASHBOARD} />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel className="text-[15px] mb-1">
          <span>CHARTS</span>
        </SidebarGroupLabel>
        <SidebarMenu className="gap-y-1">
          <SidebarMenuItem className="px-3">
            <SidebarItem url={url.DASHBOARD} label="Colour" icon={ColorIcon} isActive={pathName === url.DASHBOARD} />
          </SidebarMenuItem>
          <SidebarMenuItem className="px-3">
            <SidebarItem url={url.DASHBOARD} label="Category" icon={HomeIcon} isActive={pathName === url.DASHBOARD} />
          </SidebarMenuItem>
          <SidebarMenuItem className="px-3">
            <SidebarItem url={url.DASHBOARD} label="Product" icon={ClothIcon} isActive={pathName === url.DASHBOARD} />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </>
  );
}
