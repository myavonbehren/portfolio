import SegmentedControl from "./segmentedcontrol";
import { useState } from "react";

const Experience = () => {
    return (
        <div>
            <h2>Experience</h2>
            <SegmentedControl items={["Work", "Education"]} />
        </div>
    )
}
export default Experience;