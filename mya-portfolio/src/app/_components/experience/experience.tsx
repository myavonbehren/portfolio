import SegmentedControl from "../segmentedcontrol";
import Work from "./work";
import Education from "./education";

const items = ["Work", "Education"];

const showItem = (item: string) => {
    if (item == "Work") {
        return <Work />
    } else if (item == "Education") {
        return <Education />
    }
}

const Experience = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-2" id="experience">
            <h2 className="fluid-xl font-bold">Experience</h2>
            <SegmentedControl items={items} activeItem={0} />
            
        </div>
    )
}
export default Experience;