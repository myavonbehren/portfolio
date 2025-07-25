import Work from "./work";
import Education from "./education";
import ExperienceTabs from "./experience-tabs";

const Experience = () => {
  return (
    <div className="flex flex-col justify-start pt-10" id="experience">
        <h1 className="fluid-xxl font-bold">Experience</h1>
        <div className="w-full justify-center items-center">
            <ExperienceTabs>
                <Work />
                <Education />
            </ExperienceTabs>
        </div>
    </div>
  );
};
export default Experience;