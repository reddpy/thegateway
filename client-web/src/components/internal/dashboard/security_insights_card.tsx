import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { AlertTriangleIcon, MoveRight } from "lucide-react";


const SecurityInsightsCard = () => {
  return (
    <Card className="text-center shadow-lg gap-0 pb-0">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="font-bold text-xl">Security Insights</CardTitle>
        <Button variant="link">
          <MoveRight />
          <span>View All</span>
        </Button>
      </CardHeader>
      <hr />
      <CardContent>
        <div id="security_alert1" className="flex flex-row justify-between p-4">
          <div className="h-10 w-10 bg-red-300 rounded-xl mt-1">
            <AlertTriangleIcon className="mt-2 ml-2" color="red" />
          </div>
          <div className="text-start ml-2">
            <p>API Key in Code</p>
            <p className="text-gray-500">Customer Support Bot</p>
          </div>
          <div className="self-center">
            <Badge className="bg-red-300 text-black rounded-full">High</Badge>
          </div>
        </div>
        <hr />
        <div id="security_alert1" className="flex flex-row justify-between p-4">
          <div className="h-10 w-10 bg-yellow-300 rounded-xl mt-1">
            <AlertTriangleIcon className="mt-2 ml-2" color="yellow" />
          </div>
          <div className="text-start ml-2">
            <p>PII Data Access</p>
            <p className="text-gray-500">Customer Support Bot</p>
          </div>
          <div className="self-center">
            <Badge className="bg-yellow-300 text-black rounded-full">
              Medium
            </Badge>
          </div>
        </div>
        <hr />
        <div id="security_alert1" className="flex flex-row justify-between p-4">
          <div className="h-10 w-10 bg-blue-300 rounded-xl mt-1">
            <AlertTriangleIcon className="mt-2 ml-2" color="blue" />
          </div>
          <div className="text-start ml-2">
            <p>Unverified 3rd Party API</p>
            <p className="text-gray-500">Customer Support Bot</p>
          </div>
          <div className="self-center">
            <Badge className="bg-blue-300 text-black rounded-full">Low</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SecurityInsightsCard;
