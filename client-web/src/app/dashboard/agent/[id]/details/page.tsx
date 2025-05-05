import { Button } from "@/components/ui/button";
import { FileUp, Plug } from "lucide-react";

export default function Page() {
  return (
    <div className="container mx-auto px-2 py-1">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="px-0 md:px-4 w-full md:max-w-[60%]">
          <h1 className="font-bold text-xl sm:text-2xl">
            PLACEHOLDER FOR AGENT NAME: Customer Support Agent
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            PLACEHOLDER FOR AGENT DESCRIPTION: Handles customer inquiries and
            ticket management
          </p>
        </div>

        <div className="flex flex-wrap w-full md:w-auto gap-3 shadow-md border-2 border-indigo-300 px-2 py-2 rounded-xl">
          <Button
            variant="outline"
            className="flex-1 md:flex-auto min-w-[140px] h-auto py-2 text-sm sm:text-md text-gray-500 hover:text-black"
          >
            <Plug className="mr-2"/>
            <span>
              Connect <br className="hidden sm:block" /> Github
            </span>
          </Button>
          <Button
            variant="outline"
            className="flex-1 md:flex-auto min-w-[140px] h-auto py-2 text-sm sm:text-md text-gray-500 hover:text-black"
          >
            <FileUp className="mr-2" />
            <span>
              Upload <br className="hidden sm:block" /> Code
            </span>
          </Button>
        </div>
      </div>
      <hr className="mt-4" />
    </div>
  );
}
