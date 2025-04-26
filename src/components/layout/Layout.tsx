import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import ThemeToggle from "../shared/ThemeToggle";
import { SidebarProvider } from "@/components/ui/sidebar";

const Layout = () => {
  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen w-full">
        <Sidebar />
        <div className="flex-1 p-4 md:p-8 bg-background overflow-y-auto min-h-screen">
          <div className="absolute top-4 right-4 z-50">
            <ThemeToggle />
          </div>
          <div className="pt-14 md:pt-4 max-w-7xl mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
