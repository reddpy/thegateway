"use client";
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

import {
  Bot,
  FileText,
  LayoutDashboard,
  LogOut,
  Settings,
  TriangleAlertIcon,
} from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const pathname = usePathname();

  const main_items = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isCurrent: pathname == "/dashboard",
    },
    {
      title: "Agents",
      url: "/dashboard/agent",
      icon: Bot,
      isCurrent: pathname.includes("/dashboard/agent"),
    },
    {
      title: "Reports",
      url: "/dashboard/report",
      icon: FileText,
      isCurrent: pathname.includes("/dashboard/report"),
    },
    {
      title: "Alerts",
      url: "/dashboard/alert",
      icon: TriangleAlertIcon,
      isCurrent: pathname.includes("/dashboard/alert"),
    },
  ];

  const setting_items = [
    {
      title: "Settings",
      url: "/dashboard/setting",
      icon: Settings,
      isCurrent: pathname.includes("/dashboard/setting"),
    },
    {
      title: "Log-Out",
      url: "/auth/sign-out",
      icon: LogOut,
    },
  ];

  return (
    <Sidebar variant="floating">
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
                  <SidebarMenuButton asChild isActive={item.isCurrent}>
                    <Link href={item.url}>
                      <item.icon className="ml-2" />
                      <span className="text-lg ml-8">{item.title}</span>
                    </Link>
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
              <SidebarMenuButton asChild isActive={item.isCurrent}>
                <Link href={item.url}>
                  <item.icon className="ml-2" />
                  <span className="text-lg ml-8">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
