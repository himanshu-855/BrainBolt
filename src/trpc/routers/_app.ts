import { baseProcedure, createTRPCRouter } from "../init";

import { messageRouter } from "@/Modules/messages/server/procedures";

export const appRouter = createTRPCRouter({
 messages: messageRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
