import { inngest } from "./client";
import { openai, createAgent, gemini } from "@inngest/agent-kit";
import { Sandbox } from "@e2b/code-interpreter";
import { getSandbox } from "./utils";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    const sandboxId = await step.run("get-sandbox-id", async () => {
      const sandbox = await Sandbox.create("vide-nextjs-test-2")
      return sandbox.sandboxId;
    });
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

    const sandboxUrl = await step.run("get-sandbox-url", async () => {
      const sandbox = await getSandbox(sandboxId);
      const host = sandbox.getHost(3000);
      return `https://${host}`;
    })

    return { output, sandboxUrl };
  }
);
