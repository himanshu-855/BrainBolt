import { inngest } from "./client";
import { openai, createAgent, gemini } from "@inngest/agent-kit";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    const summarizer = createAgent({
      name: "summarizer",
      system:
        "You are an expert summarizer.  You write readable code,work upon it to get best result, concise, simple content.",
      // model: openai({ model: "gpt-4o"}),
      model: gemini({ model: "gemini-1.5-pro" }),
    });

    const { output } = await summarizer.run(
      "summarize the text: `${event.data.value}`"
    );

    return { output };
  }
);
