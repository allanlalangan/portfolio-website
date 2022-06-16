import styles from './ProjectCard.module.scss';

const ProjectCard = ({ project: { title, description, tech } }) => {
  return (
    <li>
      <h3>{title}</h3>
      <article>
        <section className={styles['project__previews--container']}>
          <figure
            className={`${styles['project__previews']} ${styles['project__previews-lg']}`}
          ></figure>
          {/* <figure
            className={`${styles['project__previews']} ${styles['project__previews-sm']}`}
          ></figure> */}
        </section>
        <section className={styles['project__summary']}>
          <p className={styles['project__description']}>{description}</p>
          <ul className={styles['project__tech']}>
            {tech?.map((tech, i) => (
              <li key={`${tech}${i}`} className={styles['project__tech__item']}>
                {tech}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </li>
  );
};
export default ProjectCard;
