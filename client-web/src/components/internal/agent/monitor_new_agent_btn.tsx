"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  BrainCircuit,
  ChartNetwork,
  Columns3Cog,
  MessagesSquare,
  PackagePlus,
  Workflow,
} from "lucide-react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  agent_name: z.string().min(5, {
    message: "Agent Name must be at least 5 characters.",
  }),
  agent_description: z.string().min(10, {
    message: "Description must at least be 10 characters.",
  }),
  agent_type: z
    .string({
      required_error: "Please select an Agent Type",
    })
    .min(1, {
      message: "Please select an Agent Type",
    }),
});

const MonitorNewAgentBtn = () => {
  const [open, isOpen] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      agent_name: "",
      agent_description: "",
      agent_type: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const url = "http://localhost:3001/new-agent";

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(values),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      if (response.ok) {
        const json = await response.json();
        if (json.status == 200) {
          isOpen(false);
          form.reset();

          toast("New agent has been added");
        }
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("An unknown error occurred");
      }
    }
  }

  function onCancel() {
    form.reset();
    isOpen(false);
  }

  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild>
        <Button
          onClick={() => {
            isOpen(true);
          }}
        >
          <PackagePlus />
          Monitor New Agent
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="h-10/12">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl">
            Monitor New Agent
          </AlertDialogTitle>
          <AlertDialogDescription>
            Add Agent Details for Monitoring
          </AlertDialogDescription>
        </AlertDialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
            <FormField
              control={form.control}
              name="agent_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Agent Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="w-auto">
                      <SelectTrigger>
                        <SelectValue placeholder="Select an Agent Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem
                        value="conversational"
                        className="flex flex-row justify-between h-12"
                      >
                        <MessagesSquare color="blue" />
                        <p className="text-lg font-medium">Conversational</p>
                      </SelectItem>
                      <SelectItem
                        value="workflow"
                        className="flex flex-row justify-between h-12"
                      >
                        <Workflow color="blue" />
                        <p className="text-lg font-medium">Workflow</p>
                      </SelectItem>
                      <SelectItem
                        value="ai_ml_model"
                        className="flex flex-row justify-between h-12"
                      >
                        <BrainCircuit color="blue" />
                        <p className="text-lg font-medium">AI/ML Model</p>
                      </SelectItem>
                      <SelectItem
                        value="analytics"
                        className="flex flex-row justify-between h-12"
                      >
                        <ChartNetwork color="blue" />
                        <p className="text-lg font-medium">Analytics</p>
                      </SelectItem>
                      <SelectItem
                        value="custom"
                        className="flex flex-row justify-between h-12"
                      >
                        <Columns3Cog color="blue" />
                        <p className="text-lg font-medium">Custom </p>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Select the type of agent that closely matches.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="agent_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Agent Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. customer bot1, data extract stripe, etc. "
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is name your label your agent.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="agent_description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Agent Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="The agent performs the following actions..."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This describes your agent and actions it performs.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <AlertDialogFooter className="items-end">
              <AlertDialogCancel onClick={onCancel}>Cancel</AlertDialogCancel>
              <AlertDialogAction type="submit">
                Submit Agent Details
              </AlertDialogAction>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default MonitorNewAgentBtn;
