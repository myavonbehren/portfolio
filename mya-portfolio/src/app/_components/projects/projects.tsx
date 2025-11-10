import ProjectItems from "./project-items";
import Container from "../container";

const Projects = () => {
    return (
    <div className="bg-projects">
    <Container>
    <div className="flex flex-col justify-start pt-20" id="projects">
        <h1 className="fluid-xxl font-bold">Projects</h1>
        <div className="w-full justify-center items-center">
            <ProjectItems />
        </div>
    </div>
    </Container>
    </div>
    )
}
export default Projects;