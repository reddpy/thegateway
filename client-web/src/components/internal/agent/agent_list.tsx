"use client";

import { useEffect, useState } from "react";

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

const AgentList = (agentParent) => {
  const [agents, setAgents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAgents(setAgents, setIsLoading);
  }, []);

  if (isLoading) return <div>Loading agents...</div>;
  console.log(agents);

  return (
    <div>
      {/* Render your agents here */}
      {agents.length === 0 ? (
        <div>No agents found</div>
      ) : (
        <ul>
          {agents.map((agent) => (
            <li key={agent.id}>{agent.agent_name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AgentList;
