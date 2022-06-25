import { SiNextdotjs } from 'react-icons/si';
import styles from './About.module.scss';

const About = () => {
  return (
    <section>
      <h2>Hello</h2>
      <p className={styles['']}>
        I'm Allan; a Portland, OR based front end developer and a life long
        learner who fell in love with programming along the way. I build
        mobile-responsive web apps that ensure a satisfying and accessible user
        experience. All styled, themed and designed by me.
      </p>

      <h2>What I am currently learning:</h2>
      <p>ARIA and accessibility</p>
      <figure>
        <SiNextdotjs size={'3rem'} />
        <figcaption>Next.js</figcaption>
      </figure>
      <p></p>
    </section>
  );
};
export default About;
