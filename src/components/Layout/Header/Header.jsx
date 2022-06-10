import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <h1>Header</h1>
      </Link>
      <nav>
        <ul className={styles['navLinks']}>
          <li className={styles['navLinks__link']}>More about me</li>
          <Link to='/projects'>
            <li className={styles['navLinks__link']}>Projects</li>
          </Link>
          <li className={styles['navLinks__link']}>Contact</li>
          <li className={styles['navLinks__link']}>CV</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
