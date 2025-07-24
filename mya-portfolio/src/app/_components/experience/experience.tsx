import SegmentedControl from "../segmentedcontrol";
import Work from "./work";
import Dpulogo from "../svg/dpulogo";
import Nulogo from "../svg/nulogo";

const Experience = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="fluid-xl font-bold">Experience</h2>
            <SegmentedControl items={["Work", "Education"]} />
            <Work></Work>
            <Dpulogo className="w-6 h-6"></Dpulogo>
            <Nulogo className="w-6 h-6"></Nulogo>

        </div>
    )
}
export default Experience;