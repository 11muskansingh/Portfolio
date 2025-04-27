import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  User,
  GraduationCap,
  BarChart3,
  Briefcase,
  Layout as LayoutIcon,
  Award,
  Bell,
  Mail,
  Menu,
} from "lucide-react";
import { useAppSelector } from "@/hooks/use-app-selector";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarTrigger,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { useEffect } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const navItems = [
  { name: "About me", path: "/about", icon: User },
  { name: "Education", path: "/education", icon: GraduationCap },
  { name: "Skills", path: "/skills", icon: BarChart3 },
  { name: "Projects", path: "/portfolio", icon: LayoutIcon },
  { name: "Achievements", path: "/achievements", icon: Award },
  { name: "Updates", path: "/updates", icon: Bell },
  { name: "Resume", path: "/resume", icon: Briefcase },
  { name: "Contact", path: "/contact", icon: Mail },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const themeMode = useAppSelector((state) => state.theme.mode);
  const { state, openMobile, setOpenMobile } = useSidebar();
  const isCollapsed = state === "collapsed";

  // Auto close sidebar on mobile after navigation
  useEffect(() => {
    if (openMobile) {
      setOpenMobile(false);
    }
  }, [location.pathname, setOpenMobile, openMobile]);

  return (
    <>
      <ShadcnSidebar>
        <SidebarContent>
          {/* Profile Section */}
          <Link
            to="/"
            className={cn(
              "flex flex-col items-center justify-center p-4 border-b border-sidebar-border",
              isCollapsed ? "py-3" : "p-4"
            )}
          >
            <div
              className={cn(
                "relative transition-all duration-300",
                isCollapsed ? "w-10 h-10" : "w-24 h-24"
              )}
            >
              <Avatar
                className={cn(
                  "border-2 border-primary",
                  isCollapsed ? "w-10 h-10" : "w-24 h-24"
                )}
              >
                <AvatarImage src="/images/avatar.png" alt="Mark Choi" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <div
                className={cn(
                  "absolute bottom-0 right-0 bg-green-500 rounded-full border border-background",
                  isCollapsed ? "w-3 h-3" : "w-4 h-4"
                )}
              ></div>
            </div>
            {!isCollapsed && (
              <div className="mt-3 text-center">
                <h1 className="text-xl font-bold font-tech">Muskan Singh</h1>
                <p className="text-sm text-muted-foreground">
                  Full Stack Developer{" "}
                </p>
              </div>
            )}
          </Link>

          {/* Navigation */}
          <SidebarGroup>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={isCollapsed ? item.name : undefined}
                    >
                      <Link
                        to={item.path}
                        className={cn(
                          "flex items-center px-4 py-3 rounded-lg transition-all gap-3",
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-sidebar-accent",
                          isCollapsed && "justify-center px-0"
                        )}
                      >
                        <item.icon
                          className={cn(
                            "shrink-0",
                            isCollapsed ? "h-6 w-6" : "h-5 w-5"
                          )}
                        />
                        {!isCollapsed && (
                          <span className="truncate">{item.name}</span>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroup>

          {/* Footer */}
          <div
            className={cn(
              "p-4 mt-auto border-t border-sidebar-border",
              isCollapsed ? "flex justify-center" : ""
            )}
          >
            <div className="flex items-center justify-center">
              <span className="inline-block w-6 h-6">
                {themeMode === "dark" ? "🌙" : "☀️"}
              </span>
              {!isCollapsed && (
                <span className="text-xs text-muted-foreground ml-2"></span>
              )}
            </div>
          </div>
        </SidebarContent>
      </ShadcnSidebar>

      {/* Desktop Collapse Trigger */}
      <div className="hidden lg:block">
        <SidebarTrigger className="fixed top-4 left-4 z-50" />
      </div>

      {/* Mobile Menu Trigger */}
      <div className="fixed top-4 left-4 z-50 lg:hidden">
        <button
          onClick={() => setOpenMobile(true)}
          className="h-9 w-9 rounded-md bg-primary/10 p-2 text-primary"
          aria-label="Open Menu"
        >
          <Menu className="h-full w-full" />
        </button>
      </div>
    </>
  );
};

export default Sidebar;
