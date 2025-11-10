import Work from "./work";
import Education from "./education";
import ExperienceTabs from "./experience-tabs";
import Skills from "./skills";
import Container from "../container";

const Experience = () => {
  return (
    <div className="bg-experience-gradient">
    <Container>
    <div className="flex flex-col justify-start pt-20" id="experience">
        <h1 className="fluid-xxl font-bold">Experience</h1>
        <div className="w-full justify-center items-center">
            <ExperienceTabs>
                <Work />
                <Education />
            </ExperienceTabs>
            <Skills />
        </div>
    </div>
    </Container>
    </div>
  );
};
export default Experience;