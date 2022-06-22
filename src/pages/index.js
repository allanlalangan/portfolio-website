import {
  Hero,
  Skills,
  FeaturedProject,
  ProjectCard,
  Divider,
} from '../components';
import { projects, about } from '../static/content';
import styles from './index.module.scss';

const Home_Page = () => {
  return (
    <>
      <Hero />
      <Divider />
      <Skills />
      <Divider />
      <h1 className={styles.heading}>Recent Projects</h1>
      <FeaturedProject />
      <Divider />
      <section>
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </section>
      <button className={styles['action-button']}>{about.actionCall_2}</button>
    </>
  );
};
export default Home_Page;
