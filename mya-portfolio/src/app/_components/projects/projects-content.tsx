'use client'

import { motion } from "motion/react";
import { ReactNode } from "react";

interface ProjectsContentProps {
  children: ReactNode;
}

const ProjectsContent = ({ children }: ProjectsContentProps) => {
  return (
    <>
      <motion.h1 
        className="fluid-xxl font-bold"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Projects
      </motion.h1>
      {children}
    </>
  );
};

export default ProjectsContent;

