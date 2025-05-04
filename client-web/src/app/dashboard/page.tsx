import DashboardCard from "@/components/internal/dashboard/main_dashboard_card";
import { Database, EarthLock, Plug, SearchCode } from "lucide-react";

export default async function Page() {
  return (
    <div className="container mx-auto px-2 py-4">
      <h1 className="text-3xl px-4 mb-4">
        Dashboard
        <hr />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          Title="Agents Analyzed"
          DataNumber={1}
          CardIcon={SearchCode}
          IconColor="bg-cyan-200"
        />
        <DashboardCard
          Title="Data Sources"
          DataNumber={5}
          CardIcon={Database}
          IconColor="bg-violet-200"
        />
        <DashboardCard
          Title="API Endpoints"
          DataNumber={2}
          CardIcon={Plug}
          IconColor="bg-green-200"
        />
        <DashboardCard
          Title="Security Insights"
          DataNumber={3}
          CardIcon={EarthLock}
          IconColor="bg-red-200"
        />
      </div>
    </div>
  );
}
