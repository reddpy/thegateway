import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FilterIcon, PackagePlus } from "lucide-react";

export default async function Page() {
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
        <Button>
          <PackagePlus />
          Monitor New Agent
        </Button>
      </div>
    </div>
  );
}
