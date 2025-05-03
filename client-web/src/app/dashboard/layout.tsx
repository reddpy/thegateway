import { AppSidebar } from "@/components/internal/dashboard/app_sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex w-full">
        <SidebarTrigger />
        <div className="flex-1 mx-2 mt-2 border-2 p-1 border-[#4169E2] rounded-xl h-[98%] shadow-xl">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
