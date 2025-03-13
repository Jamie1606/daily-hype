import SidebarItem from "@/components/shared/sidebar-item";
import SidebarSignOutButton from "@/components/shared/sidebar-signout-button";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import url from "@/constant/url";
import CategoryIcon from "@/icons/svg/category";
import ClothIcon from "@/icons/svg/cloth";
import ColorIcon from "@/icons/svg/color";
import HomeIcon from "@/icons/svg/home";
import SizeIcon from "@/icons/svg/size";
import Link from "next/link";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="border-b mt-2">
          <div className="flex w-full p-1 justify-center items-center">
            <Link className="text-2xl tracking-wider text-black font-bold cursor-pointer" href={url.DASHBOARD}>
              DAILYHYPE
            </Link>
          </div>
        </SidebarHeader>
        <SidebarContent className="mt-4">
          <SidebarMenu>
            <SidebarMenuItem className="px-3">
              <SidebarItem url={url.DASHBOARD} label="Dashboard" icon={HomeIcon} />
            </SidebarMenuItem>
          </SidebarMenu>
          <SidebarGroup>
            <SidebarGroupLabel className="text-[15px] mb-1">
              <span>FORMS</span>
            </SidebarGroupLabel>
            <SidebarMenu className="gap-y-1">
              <SidebarMenuItem className="px-3">
                <SidebarItem url={url.DASHBOARD} label="Colour" icon={ColorIcon} />
              </SidebarMenuItem>
              <SidebarMenuItem className="px-3">
                <SidebarItem url={url.DASHBOARD} label="Category" icon={CategoryIcon} />
              </SidebarMenuItem>
              <SidebarMenuItem className="px-3">
                <SidebarItem url={url.DASHBOARD} label="Product" icon={ClothIcon} />
              </SidebarMenuItem>
              <SidebarMenuItem className="px-3">
                <SidebarItem url={url.DASHBOARD} label="Size" icon={SizeIcon} />
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel className="text-[15px] mb-1">
              <span>LISTS</span>
            </SidebarGroupLabel>
            <SidebarMenu className="gap-y-1">
              <SidebarMenuItem className="px-3">
                <SidebarItem url={url.DASHBOARD} label="Colour" icon={ColorIcon} />
              </SidebarMenuItem>
              <SidebarMenuItem className="px-3">
                <SidebarItem url={url.DASHBOARD} label="Category" icon={HomeIcon} />
              </SidebarMenuItem>
              <SidebarMenuItem className="px-3">
                <SidebarItem url={url.DASHBOARD} label="Product" icon={HomeIcon} />
              </SidebarMenuItem>
              <SidebarMenuItem className="px-3">
                <SidebarItem url={url.DASHBOARD} label="User" icon={HomeIcon} />
              </SidebarMenuItem>
              <SidebarMenuItem className="px-3">
                <SidebarItem url={url.DASHBOARD} label="Product" icon={HomeIcon} />
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel className="text-[15px] mb-1">
              <span>CHARTS</span>
            </SidebarGroupLabel>
            <SidebarMenu className="gap-y-1">
              <SidebarMenuItem className="px-3">
                <SidebarItem url={url.DASHBOARD} label="Colour" icon={ColorIcon} />
              </SidebarMenuItem>
              <SidebarMenuItem className="px-3">
                <SidebarItem url={url.DASHBOARD} label="Category" icon={HomeIcon} />
              </SidebarMenuItem>
              <SidebarMenuItem className="px-3">
                <SidebarItem url={url.DASHBOARD} label="Product" icon={ClothIcon} />
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarSignOutButton />
          <div className="rounded-lg bg-black w-full h-12"></div>
        </SidebarFooter>
      </Sidebar>
      <main className="w-full">{children}</main>
    </SidebarProvider>
  );
};

export default AdminLayout;
