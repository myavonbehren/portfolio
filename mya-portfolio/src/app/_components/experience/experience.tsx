import Work from "./work";
import Education from "./education";
import ExperienceTabs from "./experience-tabs";
import Skills from "./skills";

const Experience = () => {
  return (
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
  );
};
export default Experience;