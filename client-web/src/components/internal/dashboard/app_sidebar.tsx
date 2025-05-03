import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";

import { LayoutDashboard, LogOut, Settings } from "lucide-react";

export function AppSidebar() {
  // Menu items.
  const main_items = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
  ];

  const setting_items = [
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },

    {
      title: "Log-Out",
      url: "/auth/sign-out",
      icon: LogOut,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="mx-auto mt-2">
        <Image
          src="/oneocular-svg/LOGO B.svg"
          height={150}
          width={150}
          alt="OneOcular"
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {main_items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center justify-center"
                    >
                      <item.icon />
                      <span className="text-lg">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <hr className="border-[#4169e1]" />
        <SidebarMenu>
          {setting_items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url} className="flex items-center justify-center">
                  <item.icon />
                  <span className="text-lg">{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
