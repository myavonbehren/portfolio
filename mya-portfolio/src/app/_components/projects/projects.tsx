import ProjectItems from "./project-items";
import Container from "../container";
import ProjectsContent from "./projects-content";

const Projects = () => {
    return (
    <div className="bg-projects">
    <Container>
    <div className="flex flex-col justify-start pt-20" id="projects">
      <ProjectsContent>
        <ProjectItems />
      </ProjectsContent>
    </div>
    </Container>
    </div>
    )
}
export default Projects;