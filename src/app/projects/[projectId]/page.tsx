import { ProjectView } from "@/Modules/projects/ui/views/projects-view";
import { trpc } from "@/trpc/client";
import { getQueryClient } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";

interface Props {
  params: Promise<{
    projectId: string;
  }>;
}

const Page = async ({ params }: Props) => {
  const { projectId } = await params;

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["messages.getMany", { projectId }],
    queryFn: () => trpc.messages.getMany.useQuery({ projectId }),
  });
  await queryClient.prefetchQuery({
    queryKey: ["projects.getOne", { id: projectId }],
    queryFn: () => trpc.projects.getOne.useQuery({ id: projectId }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ErrorBoundary fallback={<p>Error!</p>} >
        <Suspense fallback={<p>Loading...</p>}>
          <ProjectView projectId={projectId} />
        </Suspense>
      </ErrorBoundary>
    </HydrationBoundary>
  );
};

export default Page;
