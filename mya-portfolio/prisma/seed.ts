import { works, education, projects, skills, about } from './seed-data'
import { PrismaClient } from "../generated/prisma"

const prisma = new PrismaClient()
async function main() {
  // Seed Works
  for (const work of works) {
    await prisma.works.create({
      data: {
        ...work,
        startDate: new Date(work.startDate),
        endDate: new Date(work.endDate),
      },
    })
  }

  // Seed Education
  for (const edu of education) {
    await prisma.education.create({
      data: {
        ...edu,
        startDate: new Date(edu.startDate),
        endDate: new Date(edu.endDate),
      },
    })
  }

  // Seed Projects
  for (const project of projects) {
    await prisma.projects.create({
      data: {
        ...project,
        startDate: new Date(project.startDate),
        endDate: new Date(project.endDate),
      },
    })
  }

  // Seed Skills (single row)
  await prisma.skills.create({
    data: skills,
  })

  // Seed About (single row)
  await prisma.about.create({
    data: about,
  })

  console.log('Database seeded!')
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })