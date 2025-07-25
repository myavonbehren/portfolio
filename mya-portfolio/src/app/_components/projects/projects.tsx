import ProjectItems from "./project-items";

const Projects = () => {
    return (
        <div className="flex flex-col justify-start pt-10" id="projects">
        <h1 className="fluid-xxl font-bold">Projects</h1>
        <div className="w-full justify-center items-center">
            <ProjectItems />
        </div>
    </div>
    )
}
export default Projects;