"use client";

import { Button } from "@/components/ui/button";
import { trpc } from "@/trpc/client";
import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";

const page = () => {
  const [value, setValue] = useState("");

  const invoke = trpc.invoke.useMutation({
    onSuccess: () => {
      toast.success("Background Job Started");
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
  });

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button
        disabled={invoke.isPending}
        onClick={() => invoke.mutate({ value: value })}
      >
        Invoke Background Job
      </Button>
    </div>
  );
};

export default page;
