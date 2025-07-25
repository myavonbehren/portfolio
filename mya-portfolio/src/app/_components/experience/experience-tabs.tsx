"use client";
import { useState } from "react";
import SegmentedControl from "../segmentedcontrol";
import { motion, AnimatePresence } from "framer-motion";
interface ExperienceTabsProps {
  children: React.ReactNode[];
}

const ExperienceTabs = ({ children }: ExperienceTabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <SegmentedControl
        items={["Work", "Education"]}
        activeItem={activeIndex}
        onChange={setActiveIndex}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          {children[activeIndex]}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ExperienceTabs; 