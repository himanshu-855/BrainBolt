import { projectsRouter } from "@/Modules/projects/server/procedures";
import { createTRPCRouter } from "../init";

import { messageRouter } from "@/Modules/messages/server/procedures";

export const appRouter = createTRPCRouter({
 messages: messageRouter,
 projects: projectsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
