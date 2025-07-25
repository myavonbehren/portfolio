import { fetchProjects } from "@/app/lib/data";

const formatDate = (date?: Date | null) => {
    if (!date) return "Present";
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric' });
  };


const ProjectItems = () => {
    return (
        <div >
            <h1>ProjectItems</h1>
        </div>
    )
}

export default ProjectItems;