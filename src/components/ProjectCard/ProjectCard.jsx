const ProjectCard = ({ project: { title, description, tech } }) => {
  return (
    <li>
      <h3>{title}</h3>
      <article>
        <section className='project__previews'>
          <figure className='project__previews-lg'>
            {/* <img src='/' alt='placeholder' /> */}
          </figure>
          <figure className='project__previews-sm'>
            {/* <img src='/' alt='placeholder' /> */}
          </figure>
        </section>
        <section className='project__summary'>
          <p className='project__description'>{description}</p>
          <ul className='project__tech'>
            {tech?.map((tech, i) => (
              <li key={`${tech}${i}`} className='project__tech__item'>
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
