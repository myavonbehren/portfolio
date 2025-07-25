import { fetchProjects  } from "@/app/lib/data";
import LogoDisplay from "../experience/logodisplay";
import { FiGithub } from "react-icons/fi";
import { TbWorldWww } from "react-icons/tb";

const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric' });
  };

const skills = (skills: any) => {
    return skills.map((skill: any, index: number) => (
        <button className="fluid-s btn-base-small px-3 py-2" key={index}>{skill}</button>
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
        className="btn-base p-1.5 inline-flex items-center transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">                
            <TbWorldWww className="w-3.5 h-3.5"/>
        </a>
    )
}

const ProjectItems = async () => {
    const projects = await fetchProjects();

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {projects.map((project: any) => (
          <div className="container-base p-5" key={project.id}>
            <LogoDisplay icon={project.icon} />
                <div className="flex flex-row justify-between items-center w-full mb-5">
                    <p className="fluid-m">{project.title}</p>
                    
                    <div className="flex flex-row gap-2">
                        {live(project.live)}
                        <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-base p-1.5 inline-flex items-center transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">                
                            <FiGithub className="w-3.5 h-3.5"/>
                        </a>
                    </div>

                </div>

                <div className="fluid-s ml-1 mb-5">
                    {project.description}
                </div>

                <div className="flex flex-wrap gap-1 w-full md:flex-wrap">
                    {skills(project.skills)}
                </div>


          </div>
        ))}
        </div>
    )
}

export default ProjectItems;