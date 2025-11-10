'use client'

import { motion } from "motion/react";
import { ReactNode } from "react";

interface AboutContentProps {
  children: ReactNode;
}

const AboutContent = ({ children }: AboutContentProps) => {
  return (
    <>
      <motion.h1 
        className="fluid-xxl font-bold"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        About
      </motion.h1>
      <motion.div 
        className="w-full justify-center items-center"
        initial={{ opacity: 0, filter: "blur(5px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default AboutContent;

