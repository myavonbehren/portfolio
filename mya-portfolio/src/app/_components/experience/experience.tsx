"use client";
import Work from "./work";
import Education from "./education";
import SegmentedControl from "../segmentedcontrol";
import { useState } from "react";


const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center gap-2" id="experience">
      <SegmentedControl
        items={["Work", "Education"]}
        activeItem={activeIndex}
        onChange={setActiveIndex}
      />
      <Work />
    </div>
  );
};
export default Experience;