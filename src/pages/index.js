import { Hero, ProjectCard } from '../components';
import { projects, about } from '../static/content';

const Home_Page = () => {
  return (
    <>
      <Hero />
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
      <button>{about.actionCall_2}</button>
    </>
  );
};
export default Home_Page;
