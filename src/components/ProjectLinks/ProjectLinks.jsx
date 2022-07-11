import styles from './ProjectLinks.module.scss';
import { FaGithub, FaLink } from 'react-icons/fa';

const ProjectLinks = () => {
  return (
    <section className={styles.container}>
      <div className={styles['button-group']}>
        <button
          className={`${styles['project-link-button']} ${styles['project-link-button--github']}`}
        >
          <FaGithub className={styles['project-link-button__icon']} />
          <span className={styles['project-link-button__text']}>
            Source Code
          </span>
        </button>
        <div className={styles['button-divider']} />
        <button
          className={`${styles['project-link-button']} ${styles['project-link-button--live']}`}
        >
          <FaLink className={styles['project-link-button__icon']} />
          <span className={styles['project-link-button__text']}>
            Live Website
          </span>
        </button>
      </div>
    </section>
  );
};
export default ProjectLinks;
