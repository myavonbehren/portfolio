'use client'

import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { TbMovie } from "react-icons/tb";
import Link from "next/link";
import { motion } from "motion/react";


const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-2 bg-hero-gradient h-screen" id="home">
        <motion.h2 
          className="font-bold fluid-xl text-center"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hello, I&apos;m Mya 👋🏽
        </motion.h2>
        <motion.h1 
          className="font-bold uppercase fluid-xxxl text-center"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Full Stack <br /> Developer
        </motion.h1>
        <motion.h3 
          className="font-bold fluid-l text-center"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Based near Asheville, NC
        </motion.h3>
        <motion.div 
          className="flex items-center gap-3 pt-3 justify-center"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
            <a
            href="https://www.linkedin.com/in/myavonbehren"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base p-2.5 inline-flex items-center transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <FiLinkedin className="w-6 h-6" />
            </a>
            <a
            href="https://github.com/myavonbehren"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base p-2.5 inline-flex items-center transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">                
                <FiGithub className="w-6 h-6"/>
            </a>
            <Link href="https://creative.myavonbehren.com/" target="_blank" rel="noopener noreferrer" className="btn-base p-2.5 inline-flex items-center transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <TbMovie className="w-6 h-6"/>
            </Link>
            <a href="mailto:myakvb@gmail.com"
            rel="noopener noreferrer"
            className="btn-base p-2.5 inline-flex items-center transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <FiMail className="w-6 h-6"/>
            </a>

        </motion.div>
    </section>
  )
}
export default Hero;