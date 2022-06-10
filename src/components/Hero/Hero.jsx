import { about } from '../../static/content';

const Hero = () => {
  return (
    <section>
      <p>{about.greeting}</p>
      <h1>{about.name}</h1>
      <p>{about.title}</p>
      <p>{about.brief}</p>
      <button>{about.actionCall}</button>
    </section>
  );
};
export default Hero;
