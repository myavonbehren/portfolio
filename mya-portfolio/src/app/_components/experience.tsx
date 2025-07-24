import SegmentedControl from "./segmentedcontrol";
import { useState } from "react";

const Experience = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <h2>Experience</h2>
            <SegmentedControl items={["Work", "Education"]} />
            
        </div>
    )
}
export default Experience;