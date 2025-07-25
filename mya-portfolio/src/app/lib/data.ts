import prisma from "./db"

export async function fetchWork() {
    try {
        const work = await prisma.works.findMany(
            {
                orderBy: {
                    startDate: 'desc'
                }
            }
        );
        return work;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch work data.');
    }
}

export async function fetchEducation() {
    try {
        const education = await prisma.education.findMany();
        return education;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch education data.');
    }
}

export async function fetchProjects() {
    try {
        const projects = await prisma.projects.findMany();
        return projects;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch projects data.');
    }
}

export async function fetchSkills() {
    try {
        const skills = await prisma.skills.findMany();
        return skills;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch skills data.');
    }
}

export async function fetchAbout() {
    try {
        const about = await prisma.about.findMany();
        return about;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch about data.');
    }
}