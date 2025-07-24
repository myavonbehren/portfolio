import { PrismaClient } from "@prisma/client/edge";
import { experience, education, projects, skills, about } from "./seed-data";

const prisma = new PrismaClient();

async function main() {
  await prisma.experience.createMany({
    data: experience,
  });
  await prisma.education.createMany({
    data: education,
  });
  await prisma.projects.createMany({
    data: projects,
  });
  await prisma.skills.create({
    data: skills,
  });
  await prisma.about.create({
    data: about,
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});