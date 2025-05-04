"use client";

import MonitorNewAgentBtn from "@/components/internal/agent/monitor_new_agent_btn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FilterIcon } from "lucide-react";
import AgentList from "../../../components/internal/agent/agent_list";

import { useState, useEffect } from "react";

const fetchAgents = async (setAgents: any, setIsLoading: any) => {
  try {
    const response = await fetch("http://localhost:3001/get-agents", {
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    setAgents(data);
    setIsLoading(false);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("An unknown error occurred");
    }
  }
};

interface Agent {
  id: string | number; // Adjust based on your actual data structure
  agent_name: string;
  agent_description: string;
  agent_type: string;
  // Add other properties that exist on your agent object
}

export default function Page() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    fetchAgents(setAgents, setIsLoading);
  }, [refresh]);

  const refreshAgents = () => {
    setRefresh((prev) => prev + 1); // Increment the counter to trigger refresh
  };

  return (
    <div className="container mx-auto px-2 py-4">
      <h1 className="text-3xl px-4 mb-4">
        Agents
        <hr />
      </h1>
      <div className="flex flex-row gap-2 mt-2 mx-4">
        <Input className="bg-white" placeholder="Search Agents" />
        <Button variant={"outline"}>
          <FilterIcon />
          Filter
        </Button>
        <MonitorNewAgentBtn onAgentAdded={refreshAgents}/>
      </div>
      <div className="mt-6">
        <AgentList agentsParent={agents} />
      </div>
    </div>
  );
}
