interface Agent {
  id: string | number; // Adjust based on your actual data structure
  agent_name: string;
  agent_description: string;
  agent_type: string;
  // Add other properties that exist on your agent object
}

// Fix 1: Define proper props interface
interface AgentListProps {
  agentsParent: Agent[];
}


const AgentList = ({ agentsParent }: AgentListProps) => {
  console.log(agentsParent);
  return (
    <div>
      {agentsParent.map((agent: Agent) => (
        <p key={agent.id}>{agent.agent_name}</p>
      ))}
    </div>
  );
};

export default AgentList;
