"use client";

import { trpc } from "@/trpc/client";

export function Client() {
  const query = trpc.createAI.useQuery({ text: "Himanshu" });

  if (query.isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>tRPC Result:</h1>
      <p>{query.data?.greeting}</p>
    </div>
  );
}
