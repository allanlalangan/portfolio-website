import styles from './FeaturedProject.module.scss';

const FeaturedProject = () => {
  return (
    <section className={styles.container}>
      <h2>Nomad Travel Companion</h2>
      <article>
        <figure className={styles.feature}>
          <div className={styles.previews}></div>
          <ul>
            <li>Google Maps and Travel Advisor APIs</li>
            <li>Context API manages global state</li>
          </ul>
        </figure>

        <figure className={styles.feature}>
          <div className={styles.previews}></div>
          <p>Mobile responsive</p>
        </figure>

        <figure className={styles.feature}>
          <div className={styles.previews}></div>
          <p>
            With the help of Material UI and its components, users receive
            feedback with loading and status indicators, tooltips and modals for
            a satisfying user experience
          </p>
        </figure>

        <figure className={styles.feature}>
          <div className={styles.previews}></div>
          <p>Leveraged Axios features for efficient http requests</p>
        </figure>
      </article>
    </section>
  );
};
export default FeaturedProject;
