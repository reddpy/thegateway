import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface DashboardCardInterface {
  Title: string;
  DataNumber: number;
  CardIcon: LucideIcon;
  IconColor: string;
}

const DashboardCard: React.FC<DashboardCardInterface> = ({
  Title,
  DataNumber,
  CardIcon,
  IconColor,
}) => {
  return (
    <Card className="text-center overflow-hidden shadow-lg border-1 border-[#4169e2]">
      <CardHeader>
        <div className="flex flex-row items-center justify-between">
          <CardTitle>{Title}</CardTitle>
          <div className={`${IconColor} rounded-full h-8 w-8`}>
            <CardIcon className="h-6 w-6 mt-1 ml-1" strokeWidth={1.5} />
          </div>
        </div>
        <CardContent>
          <p className="text-3xl font-extrabold">{DataNumber}</p>
        </CardContent>
        <CardDescription></CardDescription>
      </CardHeader>

      <CardFooter></CardFooter>
    </Card>
  );
};

export default DashboardCard;
