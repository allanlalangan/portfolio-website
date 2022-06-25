import ProjectLinks from '../ProjectLinks/ProjectLinks';
import styles from './ProjectCard.module.scss';

const ProjectCard = ({ project: { title, description, tech } }) => {
  return (
    <article className={styles['project-header']}>
      <h2 className={styles['project-header__title']}>{title}</h2>
      <ProjectLinks />
    </article>
  );
};
export default ProjectCard;
