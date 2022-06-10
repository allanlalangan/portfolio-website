import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projects } from '../../static/content';

const ProjectsPage = () => {
  return (
    <>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </>
  );
};
export default ProjectsPage;
