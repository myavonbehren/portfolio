import { PrismaClient } from "@prisma/client/edge";
import { experience, education, projects, skills } from "./seed-data";

const prisma = new PrismaClient();

async function main() {
  await prisma.experience.createMany({
    data: experience,
  });
}

main();