import ProjectLinks from '../ProjectLinks/ProjectLinks';
import styles from './ProjectCard.module.scss';

import desktop from '../../assets/bezels/desktop.png';
import tablet from '../../assets/bezels/tablet.png';
import mobile from '../../assets/bezels/mobile.png';

const ProjectCard = ({ project: { title, description, tech } }) => {
  return (
    <article className={`${styles['container']} grid-row`}>
      <section className={`${styles['project-header']} col-12-md`}>
        <h2 className={`${styles['project-header__title']} col-3-md`}>
          {title}
        </h2>
        <ProjectLinks />
      </section>

      <section className={`${styles['project-body']} col-6-md`}>
        <div className={styles['bezels-container']}>
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
        </div>
      </section>
      <article className={`${styles['project-info']} col-6-md`}>
        <p>{description}</p>
        <ul>
          {tech?.map((t) => (
            <li>{t}</li>
          ))}
        </ul>
      </article>
    </article>
  );
};
export default ProjectCard;
