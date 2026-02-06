"use client";

import { trpc } from "@/trpc/client";

export function Client() {
  const query = trpc.usage.status.useQuery();

  if (query.isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>tRPC Result:</h1>
      <p>{JSON.stringify(query.data)}</p>
    </div>
  );
}
