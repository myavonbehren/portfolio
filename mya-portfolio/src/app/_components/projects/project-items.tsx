import { fetchProjects  } from "@/app/lib/data";
import { Project } from "@/app/lib/types";
import LogoDisplay from "../experience/logodisplay";
import { FiGithub } from "react-icons/fi";
import { TbWorldWww } from "react-icons/tb";
import Image from "next/image";

const skills = (skills: string[]) => {
    return skills.map((skill: string, index: number) => (
        <button className="fluid-m btn-base-small px-3 py-2" key={index}>{skill}</button>
    ))
}

const live = (live: string) => {
    if (!live) {
        return null;
    }
    return (
        <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-base p-2 inline-flex items-center transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">                
            <TbWorldWww className="w-4 h-4"/>
        </a>
    )
}

const ProjectItems = async () => {
    const projects = await fetchProjects();

    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 mt-5">
        {projects.map((project: Project) => (
          <div className="container-base overflow-hidden hover:scale-102 transition-all duration-300 ease-in-out" key={project.id}>
            {project.image && (
                <Image
                    src={project.image}
                    alt={project.title}
                    width={1920}
                    height={1080}
                    priority={true}/>
            )}
            
            <div className="p-5">
                <div className="flex flex-row justify-between items-center w-full mb-5">
                    <p className="fluid-m font-bold">{project.title}</p>
                    
                    <div className="flex flex-row gap-2">
                        {live(project.live || '')}
                        {project.github && (
                            <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-base p-2 inline-flex items-center transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">                
                                <FiGithub className="w-4 h-4"/>
                            </a>
                        )}
                    </div>

                </div>

                <div className="fluid-m ml-1 mb-5">
                    {project.description}
                </div>

                <div className="flex flex-wrap gap-1 w-full md:flex-wrap">
                    {skills(project.skills)}
                </div>
            </div>
        </div>
        ))}
        </div>
    )
}

export default ProjectItems;