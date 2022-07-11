import ProjectLinks from '../ProjectLinks/ProjectLinks';
import styles from './ProjectCard.module.scss';

import desktop from '../../assets/bezels/desktop.png';
import tablet from '../../assets/bezels/tablet.png';
import mobile from '../../assets/bezels/mobile.png';

const ProjectCard = ({ project: { title, description, tech } }) => {
  return (
    <article className={styles['container']}>
      <h2 className={styles['project-header__title']}>{title}</h2>
      <ProjectLinks />
      <section className={styles['bezels-container']}>
        <figure className={styles.bezels}>
          <img
            src={desktop}
            alt='project on desktop'
            className={styles['desktop']}
          />
          <img
            src={tablet}
            alt='project on tablet'
            className={styles['tablet']}
          />
          <img
            src={mobile}
            alt='project on mobile'
            className={styles['mobile']}
          />
        </figure>
      </section>
      <section>
        <p>{description}</p>
        <ul>
          {tech?.map((t) => (
            <li>{t}</li>
          ))}
        </ul>
      </section>
    </article>
  );
};
export default ProjectCard;
