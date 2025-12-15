"use client";

import { Button } from "@/components/ui/button";
import { trpc } from "@/trpc/client";
import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";

const page = () => {
  const [value, setValue] = useState("");

  const { data: messages } = trpc.messages.getMany.useQuery();
  const createMessage = trpc.messages.create.useMutation({
    onSuccess: () => {
      toast.success("Message created");
    },
  });

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button
        disabled={createMessage.isPending}
        onClick={() => createMessage.mutate({ value: value })}
      >
        Invoke Background Job
      </Button>
      {JSON.stringify(messages, null, 2)}
    </div>
  );
};

export default page;
