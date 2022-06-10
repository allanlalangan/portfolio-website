import { about } from '../../static/content';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles['hero']}>
      <p>{about.greeting}</p>
      <h1>{about.name}</h1>
      <p>{about.title}</p>
      <p>{about.brief}</p>
      <button>{about.actionCall}</button>
    </section>
  );
};
export default Hero;
