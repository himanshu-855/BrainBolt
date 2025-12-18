import { trpc } from "@/trpc/client";
import { MessageCard } from "./message-card";
import { MessageFrom } from "./message-form";
import { useEffect, useRef } from "react";
import { Currency } from "lucide-react";

interface Props {
  projectId: string;
}

export const MessagesContainer = ({ projectId }: Props) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const [messages] = trpc.messages.getMany.useSuspenseQuery(
    {
      projectId: projectId,
    },
  );
  useEffect(() => {
    const lastAssistantMessage = messages.findLast(
      (message) => message.role === "ASSISTANT",
    );
    if(lastAssistantMessage) {
      // TODO set active fragment
    }  
  }, [messages]);
  useEffect(() => {
    bottomRef.current?.scrollIntoView();

  }, [messages.length])
  return (
    <div className="flex flex-col flex-1 min-h-0">
      <div className="flex-1 min-h-0 overflow-y-auto">
        <div className="pt-2 pr-1">
          {messages.map((message) => (
            <MessageCard
              key={message.id}
              content={message.content}
              role={message.role}
              fragment={message.fragment}
              createdAt={message.createdAt}
              isActiveFragment={false}
              onFragmentClick={() => {}}
              type={message.type}
            />
          ))}
          <div ref={bottomRef}></div>
        </div>
      </div>
      <div className="relative p-3 pt-1">
        <div className="absolute -top-6 left-0 right-0 h-6 bg-gradient-to-b from-transparent to-background/70 pointer-events-none: "></div>
        <MessageFrom projectId={projectId}/>
      </div>
    </div>
  );
};
