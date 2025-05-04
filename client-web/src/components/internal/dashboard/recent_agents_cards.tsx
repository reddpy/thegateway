import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { MoveRight } from "lucide-react";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";

const RecentAgentsCard = () => {
  const agent = [
    {
      agent_id: "1",
      agent_name: "Security Monitor",
      apis: 12,
      data_sources: 5,
      analyzed: "Yesterday",
    },
    {
      agent_id: "2",
      agent_name: "Data Processor",
      apis: 8,
      data_sources: 3,
      analyzed: "Today",
    },
    {
      agent_id: "3",
      agent_name: "API Gateway",
      apis: 24,
      data_sources: 7,
      analyzed: "2 days ago",
    },
  ];

  return (
    <Card className="text-center shadow-lg">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="font-bold text-xl">Recent Agents</CardTitle>
        <Button variant="link" className="flex items-center gap-1">
          <span>View All</span>
          <MoveRight className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="!bg-transparent">
              <TableHead className="text-left">Agent</TableHead>
              <TableHead className="text-center">APIs</TableHead>
              <TableHead className="text-center">Data Sources</TableHead>
              <TableHead className="text-center">Analyzed</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {agent.map((agent) => (
              <TableRow key={agent.agent_id}>
                <TableCell className="text-left">{agent.agent_name}</TableCell>
                <TableCell className="text-center">{agent.apis}</TableCell>
                <TableCell className="text-center">
                  {agent.data_sources}
                </TableCell>
                <TableCell className="text-center">{agent.analyzed}</TableCell>
                <TableCell className="text-center">
                  <Button variant="link">
                    <span>View</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentAgentsCard;
