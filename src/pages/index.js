import { Hero, FeaturedProject, ProjectCard, Divider } from '../components';
import { projects, about } from '../static/content';
import styles from './index.module.scss';

const Home_Page = () => {
  return (
    <>
      <Hero />
      <Divider />
      <h1 className={styles.heading}>Recent Work</h1>
      <section className={styles.section}>
        <FeaturedProject />
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </section>
      <button>{about.actionCall_2}</button>
    </>
  );
};
export default Home_Page;
