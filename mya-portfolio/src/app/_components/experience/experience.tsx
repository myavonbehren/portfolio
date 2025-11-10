import Work from "./work";
import Education from "./education";
import ExperienceTabs from "./experience-tabs";
import Skills from "./skills";
import Container from "../container";
import { fetchSkills } from "@/app/lib/data";
import ExperienceContent from "./experience-content";

const Experience = async () => {
  const skills = await fetchSkills();

  return (
    <div className="bg-experience-gradient">
    <Container>
    <div className="flex flex-col justify-start pt-20" id="experience">
      <ExperienceContent>
        <ExperienceTabs>
          <Work />
          <Education />
        </ExperienceTabs>
        <Skills skills={skills} />
      </ExperienceContent>
    </div>
    </Container>
    </div>
  );
};
export default Experience;