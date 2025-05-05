import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Activity, Bot, ChevronRight, Code, Cpu, FileText } from "lucide-react";
import React, { useState } from "react";

interface Agent {
  id: string | number;
  agent_name: string;
  agent_description: string;
  agent_type: string;
}

interface AgentListProps {
  agentsParent: Agent[];
}

const AgentList = ({ agentsParent }: AgentListProps) => {
  const [selectedAgent, setSelectedAgent] = useState<string | number | null>(
    null
  );

  // Get agent icon based on type
  const getAgentIcon = (type: string): React.ReactNode => {
    const iconMap: Record<string, React.ReactNode> = {
      "conversational agent": <Bot className="h-5 w-5" />,
      "workflow automation": <Activity className="h-5 w-5" />,
      "ai_ml agent": <Cpu className="h-5 w-5" />,
      "analytics agent": <FileText className="h-5 w-5" />,
      "custom agent": <Code className="h-5 w-5" />,
    };

    return iconMap[type.toLowerCase()] || <Bot className="h-5 w-5" />;
  };

  // Handle card click
  const handleCardClick = (id: string | number) => {
    setSelectedAgent(id);
    console.log(`Agent ${id} selected`);
  };

  // If no agents, display a message
  if (!agentsParent || agentsParent.length === 0) {
    return (
      <div className="text-center p-8 text-gray-500">
        No agents found. Create your first agent to get started!
      </div>
    );
  }

  return (
    <ScrollArea className="h-[calc(100vh-200px)] pr-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {agentsParent.map((agent: Agent) => (
          <Card
            key={agent.id}
            className={`overflow-hidden hover:shadow-md transition-all cursor-pointer border ${
              selectedAgent === agent.id ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => handleCardClick(agent.id)}
          >
            <CardHeader className="p-4 pb-2">
              <div className="flex justify-between items-start">
                <Badge className="mb-2">
                  <div className="flex items-center gap-1">
                    {getAgentIcon(agent.agent_type)}
                    <span>{agent.agent_type}</span>
                  </div>
                </Badge>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
              <CardTitle className="text-lg line-clamp-1">
                {agent.agent_name}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <CardDescription className="line-clamp-2 h-10">
                {agent.agent_description || "No description provided."}
              </CardDescription>
            </CardContent>
            <CardFooter className="p-4 pt-0 text-xs text-muted-foreground flex justify-between items-center">
              <span>
                ID:{" "}
                {typeof agent.id === "string"
                  ? agent.id.substring(0, 8)
                  : agent.id}
              </span>
              <span>Status: Active</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
};

export default AgentList;
