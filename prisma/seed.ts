import { PrismaClient, Prisma } from "../src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const projectData: Prisma.ProjectCreateInput[] = [
  {
    name: "Sample Project",
    userId: "user_sample_123",
  },
];

export async function main() {
  for (const p of projectData) {
    await prisma.project.create({ data: p });
  }
}

main();
