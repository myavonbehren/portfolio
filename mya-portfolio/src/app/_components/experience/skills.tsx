'use client'

import { Skills as SkillsType } from "@/app/lib/types";
import { motion } from "motion/react";

const Languages = ( languages: string[] ) => {
    return languages.map((language: string, index: number) => (
        <motion.button 
            className="fluid-m btn-base-small px-3 py-2" 
            key={index}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
        >
            {language}
        </motion.button>
    ))
}

const FrameworksAndLibraries = ( frameworksAndLibraries: string[] ) => {
    return frameworksAndLibraries.map((frameworkAndLibrary: string, index: number) => (
        <motion.button 
            className="fluid-m btn-base-small px-3 py-2" 
            key={index}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
        >
            {frameworkAndLibrary}
        </motion.button>
    ))
}

const DeveloperToolsAndPlatforms = ( developerToolsAndPlatforms: string[] ) => {
    return developerToolsAndPlatforms.map((developerToolAndPlatform: string, index: number) => (
        <motion.button 
            className="fluid-m btn-base-small px-3 py-2" 
            key={index}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
        >
            {developerToolAndPlatform}
        </motion.button>
    ))
}

const Design = ( design: string[] ) => {
    return design.map((software: string, index: number) => (
        <motion.button 
            className="fluid-m btn-base-small px-3 py-2" 
            key={index}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
        >
            {software}
        </motion.button>
    ))
}

interface SkillsProps {
    skills: SkillsType[];
}

const Skills = ({ skills }: SkillsProps) => {
    return (
        <motion.div 
            className="flex flex-col justify-start pt-15"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="w-full justify-center items-center">
                <motion.h2 
                    className="fluid-l font-bold mb-2"
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Skills
                </motion.h2>

                <motion.div 
                    className="flex flex-col gap-2 mb-2"
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <h3 className="fluid-m font-bold">Languages</h3>
                    <div className="flex flex-wrap gap-1 w-full md:flex-wrap">
                        {skills.map((skill: SkillsType) => (
                           Languages(skill.languages)
                        ))}
                    </div>
                </motion.div>

                <motion.div 
                    className="flex flex-col gap-2 mb-2 mt-3"
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                    <h3 className="fluid-m font-bold">Frameworks and Libraries</h3>
                    <div className="flex flex-wrap gap-1 w-full md:flex-wrap">
                        {skills.map((skill: SkillsType) => (
                           FrameworksAndLibraries(skill.frameworksAndLibraries)
                        ))}
                    </div>
                </motion.div>

                <motion.div 
                    className="flex flex-col gap-2 mb-2 mt-3"
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <h3 className="fluid-m font-bold">Developer Tools and Platforms</h3>   
                    <div className="flex flex-wrap gap-1 w-full md:flex-wrap">
                        {skills.map((skill: SkillsType) => (
                            DeveloperToolsAndPlatforms(skill.developerToolsAndPlatforms)
                        ))}
                    </div>
                </motion.div>

                <motion.div 
                    className="flex flex-col gap-2 mb-2 mt-3"
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                >
                    <h3 className="fluid-m font-bold">Design</h3>
                    <div className="flex flex-wrap gap-1 w-full md:flex-wrap">
                        {skills.map((skill: SkillsType) => (
                            Design(skill.design)
                        ))}
                    </div>
                </motion.div>

            </div>
        </motion.div>
    )
}

export default Skills;