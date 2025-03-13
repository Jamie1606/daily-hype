import AdminFooter from "@/components/shared/admin-footer";
import CustomSidebarContent from "@/components/shared/custom-sidebar-content";
import SidebarSignOutButton from "@/components/shared/sidebar-signout-button";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarProvider } from "@/components/ui/sidebar";
import url from "@/constant/url";
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
          <CustomSidebarContent />
        </SidebarContent>
        <SidebarFooter>
          <SidebarSignOutButton />
          <div className="rounded-lg bg-black w-full h-12"></div>
        </SidebarFooter>
      </Sidebar>
      <main className="w-full flex flex-col min-h-screen justify-between">
        {children}
        <AdminFooter />
      </main>
    </SidebarProvider>
  );
};

export default AdminLayout;
