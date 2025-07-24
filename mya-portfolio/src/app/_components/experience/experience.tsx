import SegmentedControl from "../segmentedcontrol";
import Work from "./work";

const Experience = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="fluid-xl font-bold">Experience</h2>
            <SegmentedControl items={["Work", "Education"]} />
            <Work></Work>

        </div>
    )
}
export default Experience;