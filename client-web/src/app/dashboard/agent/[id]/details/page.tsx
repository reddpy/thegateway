import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Database, EarthLock, Lock, Plug, Target, Wrench } from "lucide-react";

export default async function Page() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="border-b w-full justify-start h-12">
        <TabsTrigger
          value="overview"
          className="data-[state=active]:border-indigo-400 data-[state=active]:shadow-sm"
        >
          <Target color="green" />
          <p>Overview</p>
        </TabsTrigger>
        <TabsTrigger
          value="security"
          className="data-[state=active]:border-indigo-400 data-[state=active]:shadow-sm"
        >
          <EarthLock color="blue" />
          <p>Security</p>
        </TabsTrigger>
        <TabsTrigger
          value="data-sources"
          className="data-[state=active]:border-indigo-400 data-[state=active]:shadow-sm"
        >
          <Database color="red" />
          <p>Data Sources</p>
        </TabsTrigger>
        <TabsTrigger
          value="api-interfaces"
          className="data-[state=active]:border-indigo-400 data-[state=active]:shadow-sm"
        >
          <Plug color="purple" />
          <p>API Interfaces</p>
        </TabsTrigger>
        <TabsTrigger
          value="permissions"
          className="data-[state=active]:border-indigo-400 data-[state=active]:shadow-sm"
        >
          <Lock color="orange" />
          <p>Permissions</p>
        </TabsTrigger>
        <TabsTrigger
          value="settings"
          className="data-[state=active]:border-indigo-400 data-[state=active]:shadow-sm"
        >
          <Wrench />
          <p>Settings</p>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="overview">Overview content here</TabsContent>
      <TabsContent value="security">Security content here</TabsContent>
      <TabsContent value="data-sources">Data Sources content here</TabsContent>
      <TabsContent value="api-interfaces">
        API Interfaces content here
      </TabsContent>
      <TabsContent value="permissions">Permissions content here</TabsContent>
      <TabsContent value="settings">Settings content here</TabsContent>
    </Tabs>
  );
}
