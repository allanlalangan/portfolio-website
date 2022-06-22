import { SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import styles from './Skills.module.scss';

const Skills = () => {
  return (
    <article className={styles.skills}>
      <img
        alt='icon'
        className={styles['svg-icon']}
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
      />

      <img
        alt='icon'
        className={styles['svg-icon']}
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
      />

      <img
        alt='icon'
        className={styles['svg-icon']}
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
      />

      <img
        alt='icon'
        className={styles['svg-icon']}
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
      />

      <img
        alt='icon'
        className={styles['svg-icon']}
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'
      />

      <img
        alt='icon'
        className={styles['svg-icon']}
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg'
      />

      <FaGithub className={styles['skills__icon']} />
      {/* <img
        alt='icon'
        className={styles['svg-icon']}
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
      /> */}

      <img
        alt='icon'
        className={styles['svg-icon']}
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg'
      />
    </article>
  );
};
export default Skills;
