"use client";

import { Button } from "@/components/ui/button";
import { trpc } from "@/trpc/client";
import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const createProject = trpc.projects.create.useMutation({
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      router.push(`/projects/${data.id}`);
    },
  });

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="max-w-7xl mx-auto flex items-center flex-col gap-y-4 justify-center">
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
        <Button
          disabled={createProject.isPending}
          onClick={() => createProject.mutate({ value: value })}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default page;
